const { dest, series, src, watch } = require( 'gulp' );
const postcss = require( 'gulp-postcss' );
const rename = require( 'gulp-rename' );
const replace = require( 'gulp-replace' );
const zip = require( 'gulp-zip' );

function tailwind( cb ) {
	return src( './tailwind/*.css' )
		.pipe( postcss() )
		.pipe( rename( function( path ) {
			path.basename = path.basename.replace( 'tailwind', 'style' );
		} ) )
		.pipe( dest( './theme' ) );
	cb();
}

function watching() {
	const options = '--polling' === process.argv[ 3 ] ? { interval: 1000, usePolling: true } : {};

	watch( [ './tailwind/**/*.{css,js}', './theme/**/*.php' ], options, series( tailwind ) );
}

function compress( cb ) {
	return src( './theme/*' )
		.pipe( zip( process.argv[ 4 ] ? process.argv[ 4 ] : 'theme.zip' ) )
		.pipe( dest( './' ) );
	cb();
}

exports.default = series( tailwind );
exports.watch = series( tailwind, watching );
exports.bundle = series( tailwind, compress );
