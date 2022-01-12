module.exports = {
	theme: {
		extend: {
			typography: () => ( {
				/**
				 * Tailwind Typography's default styles are opinionated, and
				 * you will need to override them if you have mockups to
				 * replicate. Two are overridden below. The rest can be found
				 * here:
				 *
				 * https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
				 */

				DEFAULT: {
					css: [
						{
							/**
							 * The block editor sets `box-sizing` to `revert`
							 * for lists in its reset. This restores the
							 * expected value.
							 */
							'ol, ul': {
								boxSizing: 'border-box',
							},
						},
					],
				},
			} ),
		},
	},
};
