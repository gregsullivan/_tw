export default () => {
	const plugins = {
		'postcss-import-ext-glob': {},
		'@tailwindcss/postcss': {
			optimize: false,
			transformAssetUrls: false,
		},
		'postcss-advanced-variables': {
			variables: {
				target: process.env._TW_TARGET || 'frontend',
			},
		},
		'postcss-nesting': {},
	};

	if ('production' === process.env._TW_ENV) {
		plugins.cssnano = {};
	}

	return { plugins };
};
