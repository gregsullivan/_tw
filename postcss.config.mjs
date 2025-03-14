export default {
	plugins: {
		'@tailwindcss/postcss': {},
		'postcss-nesting': {},

		/**
		 * This is a hopefully temporary workaround to prevent `url()` values
		 * from being rebased to the document root for bundlers by
		 * `@tailwindcss/postcss`. See:
		 * https://github.com/tailwindlabs/tailwindcss/pull/16965
		 */
		'postcss-url': {
			url: function (asset) {
				const prefixesToStrip = [
					'./tailwind/custom/components/',
					'./tailwind/custom/',
					'./tailwind/',
				];

				for (const prefix of prefixesToStrip) {
					if (asset.url.startsWith(prefix)) {
						return asset.url.replace(prefix, '');
					}
				}

				return asset.url;
			},
		},
	},
};
