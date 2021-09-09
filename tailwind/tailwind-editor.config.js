module.exports = {
	presets: [
		require( './tailwind.config.js' ),
	],
	plugins: [
		require( '@_tw/typography' )( {
			postTitleSelector: '.editor-post-title__block .editor-post-title__input',
			postContentSelector: false,
		} ),
	],
};
