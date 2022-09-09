/* eslint-env node */

const selectors = ( 'editor' === process.env._TW_TARGET ) ? {
	'post-title-selector': '.editor-post-title__input',
	'prose-selector': '.block-editor-block-list__layout',
} : {
	'post-title-selector': '.page-title, .entry-title',
	'prose-selector': '._tw-prose',
};

module.exports = {
	plugins: [
		require( 'postcss-import-ext-glob' ),
		require( 'postcss-import' ),
		require( 'postcss-simple-vars' )( { variables: selectors } ),
		require( 'tailwindcss/nesting' ),
		require( 'tailwindcss' ),
	],
};
