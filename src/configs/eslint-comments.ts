import type { FlatConfigItem } from '../types.js';
// @ts-expect-error untyped module
import pluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments';

export function eslintComments(): FlatConfigItem {
	return {
		name: 'directus/eslint-comments',
		plugins: {
			'eslint-comments': pluginEslintComments,
		},
		rules: {
			'eslint-comments/no-aggregating-enable': 'error',
			'eslint-comments/no-duplicate-disable': 'error',
			'eslint-comments/no-unlimited-disable': 'error',
			'eslint-comments/no-unused-enable': 'error',
		},
	};
}
