#!/usr/bin/env node

import AdmZip from 'adm-zip';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const args = process.argv.slice(2);
const slug = args[0];

if (slug) {
	const __dirname = dirname(fileURLToPath(import.meta.url));
	const zipFilePath = join(__dirname, '..', `${slug}.zip`);
	const themeDir = join(__dirname, '..', 'theme');

	// Create the zip and add the theme directory under the slug name.
	const zip = new AdmZip();
	zip.addLocalFolder(themeDir, slug);

	// Update the version string in functions.php before writing.
	const entry = zip.getEntry(`${slug}/functions.php`);

	if (entry) {
		const originalContent = zip.readAsText(entry);

		const updatedContent = originalContent.replace(
			/(define\( '[A-Z0-9_]*_VERSION', ')(.*)(' \);)/g,
			'$1' +
				parseInt(Math.floor(Date.now() / 1000), 10).toString(36) +
				'$3'
		);

		zip.updateFile(entry, Buffer.from(updatedContent));

		console.log(
			'Date-based versioning string successfully added to `./functions.php`.'
		);
	}

	// Write the final zip to disk.
	zip.writeZip(zipFilePath);
	console.log('Theme ZIP file created.');
}
