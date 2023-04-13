#!/usr/bin/env node

/*
 * Based upon the Archiver quickstart.
 * @see: https://www.archiverjs.com/docs/quickstart
 */

// Require modules.
const AdmZip = require('adm-zip');
const archiver = require('archiver');
const fs = require('fs');

const args = process.argv.slice(2);
const slug = args[0];

if (slug) {
	// Set the path for the ZIP file.
	const zipFilePath = __dirname + '/../' + slug + '.zip';

	// Create a file to stream archive data to.
	const output = fs.createWriteStream(zipFilePath);
	const archive = archiver('zip');

	// Listen for all archive data to be written.
	output.on('close', function () {
		console.log(archive.pointer() + ' total bytes.');
		console.log('Theme ZIP file created.');

		// Read the zip file.
		const zip = new AdmZip(zipFilePath);

		// Load `./functions.php` from the zip file.
		const entry = zip.getEntry(slug + '/functions.php');

		if (entry) {
			// Get the contents of `./functions.php`.
			const originalContent = zip.readAsText(entry);

			// Replace the version string with a date-based version string.
			const updatedContent = originalContent.replace(
				/(define\( '[A-Z0-9_]*_VERSION', ')(.*)(' \);)/g,
				'$1' +
					parseInt(Math.floor(Date.now() / 1000), 10).toString(36) +
					'$3'
			);

			// Update the contents of `./functions.php`.
			zip.updateFile(entry, Buffer.from(updatedContent));

			// Write the changes back to the zip file.
			zip.writeZip(zipFilePath);

			console.log(
				'Date-based versioning string successfully added to `./functions.php`.'
			);
		}
	});

	// This event is fired when the data source is drained no matter what was the data source.
	// It is not part of this library but rather from the NodeJS Stream API.
	// @see: https://nodejs.org/api/stream.html#stream_event_end
	output.on('end', function () {
		console.log('Data has been drained');
	});

	// Catch warnings.
	archive.on('warning', function (err) {
		if (err.code === 'ENOENT') {
			// log warning
		} else {
			// throw error
			throw err;
		}
	});

	// Catch errors.
	archive.on('error', function (err) {
		throw err;
	});

	// Pipe archive data to the file.
	archive.pipe(output);

	// Append the entire contents of the theme directory to a directory with
	// the theme slug.
	archive.directory(__dirname + '/../theme/', slug);

	// Finalize the archive.
	archive.finalize();
}
