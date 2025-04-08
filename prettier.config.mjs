import wordpressPrettierConfig from '@wordpress/prettier-config';

export default {
	...wordpressPrettierConfig,
	plugins: ['prettier-plugin-tailwindcss'],
};
