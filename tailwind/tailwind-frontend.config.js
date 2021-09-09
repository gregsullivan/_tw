module.exports = {
	presets: [
		require( './tailwind.config.js' ),
	],
	plugins: [
		require( '@_tw/typography' )( {
			postTitleSelector: '.entry-title',
			postContentSelector: '.entry-content',
		} ),
	],
};
