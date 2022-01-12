/* eslint-env node */

const selectors = ( 'editor' === process.env._TW_TARGET ) ? {
	'post-title-selector': '.editor-post-title__block .editor-post-title__input',
	'post-content-selector': 'body .block-editor-block-list__layout',
} : {
	'post-title-selector': '.entry-title',
	'post-content-selector': '.entry-content',
};

module.exports = {
	plugins: [
		require( 'postcss-import' ),
		require( 'postcss-simple-vars' )( { variables: selectors } ),
		require( 'tailwindcss' ),
	],
};
