// Set flag to include Preflight conditionally based on the build target.
const includePreflight = ( 'editor' === process.env._TW_TARGET ) ? false : true;

module.exports = {
	presets: [
		// Manage Tailwind Typography's configuration in a separate file.
		require( './tailwind-typography.config.js' ),
	],
	content: [
		// Ensure changes to PHP files and `theme.json` trigger a rebuild.
		'./theme/**/*.php',
		'./theme/theme.json',
	],
	theme: {
		// Extend the default Tailwind theme.
		extend: {

		},
	},
	corePlugins: {
		// Disable Preflight base styles in CSS targeting the editor.
		preflight: includePreflight,
	},
	plugins: [
		// Add Tailwind Typography.
		require( '@tailwindcss/typography' ),

		// Extract colors and widths from `theme.json`.
		require( '@_tw/themejson' )( require( '../theme/theme.json' ) ),

		// Uncomment below to add additional first-party Tailwind plugins.
		// require( '@tailwindcss/aspect-ratio' ),
		// require( '@tailwindcss/forms' ),
		// require( '@tailwindcss/line-clamp' ),
	],
};
