import type { FlatConfigItem } from '../types.js';
import pluginUnicorn from 'eslint-plugin-unicorn';
import { GLOBS_CODE } from '../globs.js';

export function unicorn(): FlatConfigItem {
	return {
		name: 'directus/unicorn',
		files: GLOBS_CODE,
		plugins: {
			unicorn: pluginUnicorn,
		},
		rules: {
			...pluginUnicorn.configs.recommended.rules,

			// Too specific / extensive
			'unicorn/filename-case': 'off',
			'unicorn/prevent-abbreviations': 'off',
			'unicorn/no-null': 'off',
			'unicorn/no-array-reduce': 'off',
			'unicorn/no-unnecessary-polyfills': 'off',
			'unicorn/prefer-global-this': 'off',
			'unicorn/no-process-exit': 'off',
			'unicorn/no-negated-condition': 'off',
			'unicorn/switch-case-braces': 'off',
		},
	};
}
