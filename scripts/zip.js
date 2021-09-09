#!/usr/bin/env node

/*
 * Based upon the Archiver quickstart.
 * @see: https://www.archiverjs.com/docs/quickstart
*/

// Require modules.
const fs = require( 'fs' );
const archiver = require( 'archiver' );

const args = process.argv.slice( 2 );
const slug = args[ 0 ];

if ( slug ) {
	// Create a file to stream archive data to.
	const output = fs.createWriteStream( __dirname + '/../' + slug + '.zip' );
	const archive = archiver( 'zip' );

	// Listen for all archive data to be written.
	output.on( 'close', function() {
		console.log( archive.pointer() + ' total bytes.' );
		console.log( 'Theme ZIP file created.' );
	} );

	// This event is fired when the data source is drained no matter what was the data source.
	// It is not part of this library but rather from the NodeJS Stream API.
	// @see: https://nodejs.org/api/stream.html#stream_event_end
	output.on( 'end', function() {
		console.log( 'Data has been drained' );
	} );

	// Catch warnings.
	archive.on( 'warning', function( err ) {
		if ( err.code === 'ENOENT' ) {
			// log warning
		} else {
			// throw error
			throw err;
		}
	} );

	// Catch errors.
	archive.on( 'error', function( err ) {
		throw err;
	} );

	// Pipe archive data to the file.
	archive.pipe( output );

	// Append the entire contents of the theme directory to a directory with the theme slug.
	archive.directory( __dirname + '/../theme/', slug );

	// Finalize the archive.
	archive.finalize();
}
