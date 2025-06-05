/**
 * Tailwind Typography can only be configured via JavaScript, using a legacy
 * configuration file like this one.
 */

// Copied from Tailwind Typography.
const hexToRgb = (hex) => {
	if (typeof hex !== 'string' || hex.length === 0) {
		return hex;
	}

	hex = hex.replace('#', '');
	hex = hex.length === 3 ? hex.replace(/./g, '$&$&') : hex;
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);
	return `${r} ${g} ${b}`;
};

module.exports = {
	theme: {
		extend: {
			typography: (theme) => ({
				/**
				 * Tailwind Typography’s default styles are opinionated, and
				 * you may need to override them if you have mockups to
				 * replicate. You can view the default modifiers here:
				 *
				 * https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
				 */

				DEFAULT: {
					css: [
						{
							/**
							 * By default, max-width is set to 65 characters.
							 * This is a good default for readability, but
							 * often in conflict with client-supplied designs.
							 */
							maxWidth: 'none',

							/**
							 * Tailwind Typography uses the font weights 400
							 * through 900. If you’re not using a variable font,
							 * you may need to limit the number of supported
							 * weights. Below are all of the default weights,
							 * ready to be overridden.
							 */
							// a: {
							// 	fontWeight: '500',
							// },
							// strong: {
							// 	fontWeight: '600',
							// },
							// 'ol > li::marker': {
							// 	fontWeight: '400',
							// },
							// dt: {
							// 	fontWeight: '600',
							// },
							// blockquote: {
							// 	fontWeight: '500',
							// },
							// h1: {
							// 	fontWeight: '800',
							// },
							// 'h1 strong': {
							// 	fontWeight: '900',
							// },
							// h2: {
							// 	fontWeight: '700',
							// },
							// 'h2 strong': {
							// 	fontWeight: '800',
							// },
							// h3: {
							// 	fontWeight: '600',
							// },
							// 'h3 strong': {
							// 	fontWeight: '700',
							// },
							// h4: {
							// 	fontWeight: '600',
							// },
							// 'h4 strong': {
							// 	fontWeight: '700',
							// },
							// kbd: {
							// 	fontWeight: '500',
							// },
							// code: {
							// 	fontWeight: '600',
							// },
							// pre: {
							// 	fontWeight: '400',
							// },
							// 'thead th': {
							// 	fontWeight: '600',
							// },
						},
					],
				},

				/**
				 * By default, _tw uses Tailwind Typography’s Neutral gray
				 * scale. If you are adapting an existing design and you need
				 * to set specific colors throughout, you can do so here. In
				 * your `./theme/functions.php file, you will need to replace
				 * `-neutral` with `-_tw`.
				 */
				_tw: {
					css: {
						'--tw-prose-body': theme('colors.foreground'),
						'--tw-prose-headings': theme('colors.foreground'),
						'--tw-prose-lead': theme('colors.foreground'),
						'--tw-prose-links': theme('colors.primary'),
						'--tw-prose-bold': theme('colors.foreground'),
						'--tw-prose-counters': theme('colors.primary'),
						'--tw-prose-bullets': theme('colors.primary'),
						'--tw-prose-hr': theme('colors.foreground'),
						'--tw-prose-quotes': theme('colors.foreground'),
						'--tw-prose-quote-borders': theme('colors.primary'),
						'--tw-prose-captions': theme('colors.foreground'),
						'--tw-prose-kbd': theme('colors.foreground'),

						/**
						 * Since the theme colors use CSS variables, you'll
						 * need to update the hex color below and then
						 * uncomment:
						 */
						// '--tw-prose-kbd-shadows': hexToRgb(
						// 	'#123456'
						// ),

						'--tw-prose-code': theme('colors.foreground'),
						'--tw-prose-pre-code': theme('colors.background'),
						'--tw-prose-pre-bg': theme('colors.foreground'),
						'--tw-prose-th-borders': theme('colors.foreground'),
						'--tw-prose-td-borders': theme('colors.foreground'),
						'--tw-prose-invert-body': theme('colors.background'),
						'--tw-prose-invert-headings':
							theme('colors.background'),
						'--tw-prose-invert-lead': theme('colors.background'),
						'--tw-prose-invert-links': theme('colors.primary'),
						'--tw-prose-invert-bold': theme('colors.background'),
						'--tw-prose-invert-counters': theme('colors.primary'),
						'--tw-prose-invert-bullets': theme('colors.primary'),
						'--tw-prose-invert-hr': theme('colors.background'),
						'--tw-prose-invert-quotes': theme('colors.background'),
						'--tw-prose-invert-quote-borders':
							theme('colors.primary'),
						'--tw-prose-invert-captions':
							theme('colors.background'),
						'--tw-prose-invert-kbd': theme('colors.background'),
						'--tw-prose-invert-kbd-shadows': hexToRgb(
							theme('colors.background')
						),
						'--tw-prose-invert-code': theme('colors.foreground'),
						'--tw-prose-invert-pre-code':
							theme('colors.background'),

						/**
						 * Since the theme colors use CSS variables, you'll
						 * need to update the hex color below and then
						 * uncomment:
						 */
						// '--tw-prose-invert-pre-bg': hexToRgb(
						// 	'#123456'
						// ),

						'--tw-prose-invert-th-borders':
							theme('colors.background'),
						'--tw-prose-invert-td-borders':
							theme('colors.background'),
					},
				},
			}),
		},
	},
};
