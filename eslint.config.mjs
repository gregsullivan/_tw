import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
	{
		ignores: ['**/*.min.js', '**/vendor/'],
	},
	{
		files: ['**/*.{js,mjs}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'script',
		},
		rules: {
			...js.configs.recommended.rules,
			...prettier.rules,
		},
	},
	{
		files: ['javascript/**/*.js', '**/*.mjs'],
		languageOptions: {
			sourceType: 'module',
		},
	},
	{
		files: ['javascript/**/*.js'],
		languageOptions: {
			globals: {
				...globals.browser,
				wp: 'readonly',
			},
		},
	},
	{
		files: ['node_scripts/*.js', 'tailwind/*.js'],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
];
