// Import the default theme so we can use its gray values.
const defaultTheme = require( 'tailwindcss/defaultTheme' );

// Functions for sizing calculations used by Tailwind Typography.
const round = ( num ) =>
	num
		.toFixed( 7 )
		.replace( /(\.[0-9]+?)0+$/, '$1' )
		.replace( /\.0$/, '' );
const rem = ( px ) => `${ round( px / 16 ) }rem`;
const em = ( px, base ) => `${ round( px / base ) }em`;

module.exports = {
	theme: {
		extend: {
			typography: ( theme ) => ( {
				/**
				 * Tailwind Typography's default styles are opinionated, and
				 * you will need to override them if you have mockups to
				 * replicate. Below you'll find a selection of the plugin's
				 * default styles; in my experience, these are the ones you're
				 * most likely to change. The rest can be found here:
				 *
				 * https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
				 */

				DEFAULT: {
					css: [
						{
							color: theme( 'colors.gray.700', defaultTheme.colors.gray[ 700 ] ),

							/**
							 * By default, max-width is set to 65 characters.
							 * This is a good default for readability, but
							 * often in conflict with client work. Setting it
							 * to false removes the max-width property.
							 */
							maxWidth: false,

							/**
							 * Switching to `is-style-lead` makes it possible
							 * to create a block style that will match this
							 * selector.
							 */
							'[class~="lead"]': false,
							'[class~="is-style-lead"]': {
								color: theme( 'colors.gray.600', defaultTheme.colors.gray[ 600 ] ),
							},
							a: {
								color: theme( 'colors.primary', defaultTheme.colors.gray[ 900 ] ),
								textDecoration: 'underline',
								fontWeight: '500',
							},
							strong: {
								color: theme( 'colors.gray.900', defaultTheme.colors.gray[ 900 ] ),
								fontWeight: '600',
							},
							ol: {
								listStyleType: 'decimal',
							},
							ul: {
								listStyleType: 'disc',
							},
							'ol > li::before': false,
							'ul > li::before': false,
							hr: {
								borderColor: theme( 'colors.gray.200', defaultTheme.colors.gray[ 200 ] ),
								borderTopWidth: 1,
								borderBottomWidth: 0,
							},
							blockquote: {
								fontWeight: '500',
								fontStyle: 'italic',
								color: theme( 'colors.gray.900', defaultTheme.colors.gray[ 900 ] ),
								borderLeftWidth: '0.25rem',
								borderLeftColor: theme( 'colors.gray.200', defaultTheme.colors.gray[ 200 ] ),
								quotes: '"\\201C""\\201D""\\2018""\\2019"',
							},
							'blockquote p:first-of-type::before': {
								content: 'open-quote',
							},
							'blockquote p:last-of-type::after': {
								content: 'close-quote',
							},

							/**
							 * Classes added below will also style the editor's
							 * post title field.
							 */
							h1: {
								color: theme( 'colors.gray.900', defaultTheme.colors.gray[ 900 ] ),
								fontWeight: '800',
							},
							'h1 strong': {
								fontWeight: '900',
							},
							h2: {
								color: theme( 'colors.gray.900', defaultTheme.colors.gray[ 900 ] ),
								fontWeight: '700',
							},
							'h2 strong': {
								fontWeight: '800',
							},
							h3: {
								color: theme( 'colors.gray.900', defaultTheme.colors.gray[ 900 ] ),
								fontWeight: '600',
							},
							'h3 strong': {
								fontWeight: '700',
							},
							h4: {
								color: theme( 'colors.gray.900', defaultTheme.colors.gray[ 900 ] ),
								fontWeight: '600',
							},
							'h4 strong': {
								fontWeight: '700',
							},
							'figure figcaption': {
								color: theme( 'colors.gray.500', defaultTheme.colors.gray[ 500 ] ),
							},
							code: {
								color: theme( 'colors.gray.900', defaultTheme.colors.gray[ 900 ] ),
								fontWeight: '600',
							},
							'a code': {
								color: theme( 'colors.gray.900', defaultTheme.colors.gray[ 900 ] ),
							},
							pre: {
								color: theme( 'colors.gray.200', defaultTheme.colors.gray[ 200 ] ),
								backgroundColor: theme( 'colors.gray.800', defaultTheme.colors.gray[ 800 ] ),
							},
							'pre code': {
								backgroundColor: 'transparent',
								borderWidth: '0',
								borderRadius: '0',
								padding: '0',
								fontWeight: '400',
							},
							thead: {
								color: theme( 'colors.gray.900', defaultTheme.colors.gray[ 900 ] ),
								fontWeight: '600',
								borderBottomWidth: '1px',
								borderBottomColor: theme( 'colors.gray.300', defaultTheme.colors.gray[ 300 ] ),
							},
							'tbody tr': {
								borderBottomWidth: '1px',
								borderBottomColor: theme( 'colors.gray.200', defaultTheme.colors.gray[ 200 ] ),
							},
						},

						/**
						 * The default styles are split, with everything
						 * involving sizing in a separate object that matches
						 * the structure of the objects used for alternate sizes
						 * (e.g., `sm` and `lg`).
						 */
						{
							fontSize: rem( 16 ),
							lineHeight: round( 28 / 16 ),
							p: {
								marginTop: em( 20, 16 ),
								marginBottom: em( 20, 16 ),
							},
							'[class~="is-style-lead"]': {
								fontSize: em( 20, 16 ),
								lineHeight: round( 32 / 20 ),
								marginTop: em( 24, 20 ),
								marginBottom: em( 24, 20 ),
							},
							blockquote: {
								marginTop: em( 32, 20 ),
								marginBottom: em( 32, 20 ),
								paddingLeft: em( 20, 20 ),
							},

							/**
							 * Classes added below will also style the editor's
							 * post title field.
							 */
							h1: {
								fontSize: em( 36, 16 ),
								marginTop: '0',
								marginBottom: em( 32, 36 ),
								lineHeight: round( 40 / 36 ),
							},
							h2: {
								fontSize: em( 24, 16 ),
								marginTop: em( 48, 24 ),
								marginBottom: em( 24, 24 ),
								lineHeight: round( 32 / 24 ),
							},
							h3: {
								fontSize: em( 20, 16 ),
								marginTop: em( 32, 20 ),
								marginBottom: em( 12, 20 ),
								lineHeight: round( 32 / 20 ),
							},
							h4: {
								marginTop: em( 24, 16 ),
								marginBottom: em( 8, 16 ),
								lineHeight: round( 24 / 16 ),
							},
							img: {
								marginTop: em( 32, 16 ),
								marginBottom: em( 32, 16 ),
							},
							video: {
								marginTop: em( 32, 16 ),
								marginBottom: em( 32, 16 ),
							},
							figure: {
								marginTop: em( 32, 16 ),
								marginBottom: em( 32, 16 ),
							},
							'figure > *': {
								marginTop: '0',
								marginBottom: '0',
							},
							'figure figcaption': {
								fontSize: em( 14, 16 ),
								lineHeight: round( 20 / 14 ),
								marginTop: em( 12, 14 ),
							},
							code: {
								fontSize: em( 14, 16 ),
							},
							'h2 code': {
								fontSize: em( 21, 24 ),
							},
							'h3 code': {
								fontSize: em( 18, 20 ),
							},
							pre: {
								fontSize: em( 14, 16 ),
								lineHeight: round( 24 / 14 ),
								marginTop: em( 24, 14 ),
								marginBottom: em( 24, 14 ),
								borderRadius: rem( 6 ),
								paddingTop: em( 12, 14 ),
								paddingRight: em( 16, 14 ),
								paddingBottom: em( 12, 14 ),
								paddingLeft: em( 16, 14 ),
							},
							ol: {
								marginTop: em( 20, 16 ),
								marginBottom: em( 20, 16 ),
							},
							ul: {
								marginTop: em( 20, 16 ),
								marginBottom: em( 20, 16 ),
							},
							li: {
								marginTop: em( 8, 16 ),
								marginBottom: em( 8, 16 ),
							},
							'ol > li': false,
							'ol > li::before': false,
							'ul > li': false,
							'ul > li::before': false,
							'> ul > li p': {
								marginTop: em( 12, 16 ),
								marginBottom: em( 12, 16 ),
							},
							'> ul > li > *:first-child': {
								marginTop: em( 20, 16 ),
							},
							'> ul > li > *:last-child': {
								marginBottom: em( 20, 16 ),
							},
							'> ol > li > *:first-child': {
								marginTop: em( 20, 16 ),
							},
							'> ol > li > *:last-child': {
								marginBottom: em( 20, 16 ),
							},
							'ul ul, ul ol, ol ul, ol ol': {
								marginTop: em( 12, 16 ),
								marginBottom: em( 12, 16 ),
							},
							hr: {
								marginTop: em( 48, 16 ),
								marginBottom: em( 48, 16 ),
							},
							'hr + *': {
								marginTop: '0',
							},
							'h2 + *': {
								marginTop: '0',
							},
							'h3 + *': {
								marginTop: '0',
							},
							'h4 + *': {
								marginTop: '0',
							},
							table: {
								fontSize: em( 14, 16 ),
								lineHeight: round( 24 / 14 ),
							},
							'td, th': {
								border: 0,
							},
							'thead th': {
								paddingRight: em( 8, 14 ),
								paddingBottom: em( 8, 14 ),
								paddingLeft: em( 8, 14 ),
							},
							'thead th:first-child': {
								paddingLeft: '0',
							},
							'thead th:last-child': {
								paddingRight: '0',
							},
							'tbody td': {
								paddingTop: em( 8, 14 ),
								paddingRight: em( 8, 14 ),
								paddingBottom: em( 8, 14 ),
								paddingLeft: em( 8, 14 ),
							},
							'tbody td:first-child': {
								paddingLeft: '0',
							},
							'tbody td:last-child': {
								paddingRight: '0',
							},
						},
					],
				},
				sm: {
					css: [
						{
							'[class~="lead"]': false,
							'[class~="is-style-lead"]': {
								fontSize: em( 18, 14 ),
								lineHeight: round( 28 / 18 ),
								marginTop: em( 16, 18 ),
								marginBottom: em( 16, 18 ),
							},
						},
					],
				},
				lg: {
					css: [
						{
							'[class~="lead"]': false,
							'[class~="is-style-lead"]': {
								fontSize: em( 22, 18 ),
								lineHeight: round( 32 / 22 ),
								marginTop: em( 24, 22 ),
								marginBottom: em( 24, 22 ),
							},
						},
					],
				},
				xl: {
					css: [
						{
							'[class~="lead"]': false,
							'[class~="is-style-lead"]': {
								fontSize: em( 24, 20 ),
								lineHeight: round( 36 / 24 ),
								marginTop: em( 24, 24 ),
								marginBottom: em( 24, 24 ),
							},
						},
					],
				},
				'2xl': {
					css: [
						{
							'[class~="lead"]': false,
							'[class~="is-style-lead"]': {
								fontSize: em( 30, 24 ),
								lineHeight: round( 44 / 30 ),
								marginTop: em( 32, 30 ),
								marginBottom: em( 32, 30 ),
							},
						},
					],
				},
			} ),
		},
	},
};
