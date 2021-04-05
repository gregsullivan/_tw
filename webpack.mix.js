const mix = require( 'laravel-mix' );
const tailwindcss = require( 'tailwindcss' );

mix.postCss(
	'./tailwind/tailwind.css',
	'./theme/style.css'
).options( {
	postCss: [
		require( 'postcss-import' )(),
		tailwindcss( './tailwind/tailwind.config.js' ),
	],
	processCssUrls: false,
} );
