module.exports = {
	presets: [
		// Manage Tailwind Typography's configuration in a separate file.
		require( './tailwind-typography.config.js' ),
	],
	content: [
		// Ensure changes to theme.json and all PHP files rebuild your CSS.
		'./theme/theme.json',
		'./theme/**/*.php',
	],
	safelist: [
		// Prevent editor-specific styles from being purged.
		'editor-post-title__block',
		'editor-post-title__input',
	],
	theme: {
		// Extend the default theme.
		extend: {

		},
	},
	plugins: [
		// Add Tailwind Typography.
		require( '@tailwindcss/typography' ),

		// Extract colors and widths from theme.json.
		require( '@_tw/themejson' )( require( '../theme/theme.json' ) ),

		// Uncomment below to add additional first-party Tailwind plugins.
		// require( '@tailwindcss/aspect-ratio' ),
		// require( '@tailwindcss/forms' ),
		// require( '@tailwindcss/line-clamp' ),
	],
};
