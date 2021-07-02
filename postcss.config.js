const tailwindcss = require( 'tailwindcss' );
const cssnano = require( 'cssnano' );

module.exports = ( { env } ) => ( {
	plugins: [
		require( 'postcss-import' )(),
		tailwindcss( './tailwind/tailwind.config.js' ),
		require( 'autoprefixer' )(),
		'production' === env ? cssnano( { preset: 'default' } ) : false,
	],
} );
