import type { FlatConfigItem } from '../types.js';
import pluginUnicorn from 'eslint-plugin-unicorn';

export function unicorn(): FlatConfigItem {
	return {
		name: 'directus/unicorn',
		plugins: {
			unicorn: pluginUnicorn,
		},
		rules: {
			...pluginUnicorn.configs['flat/recommended'].rules,
			'unicorn/prevent-abbreviations': 'off',
			'unicorn/no-null': 'off',
		},
	};
}
