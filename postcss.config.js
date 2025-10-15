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
				'where-not':
					'editor' === process.env._TW_TARGET
						? "[class~='not-prose'], [class~='not-prose'] *, [class~='acf-block-body']:not([class~='acf-block-preview']) *"
						: "[class~='not-prose'], [class~='not-prose'] *",
			},
		},
		'postcss-nesting': {},
	};

	if ('production' === process.env._TW_ENV) {
		plugins.cssnano = {};
	}

	if ('intellisense' === process.env._TW_TARGET) {
		delete plugins['@tailwindcss/postcss'];

		plugins.cssnano = {};
		plugins['postcss-advanced-variables'] = {
			importFilter: () => {
				return false;
			},
			unresolved: 'ignore',
			variables: {
				target: 'editor',
			},
		};
		plugins['postcss-header'] = {
			header: '/*!\n * IMPORTANT: This is a generated file. EDITS WILL BE OVERWRITTEN.\n * This file enables full Tailwind CSS Language Server support for all imports.\n */',
		};
	}

	return { plugins };
};
