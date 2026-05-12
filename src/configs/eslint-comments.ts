import type { FlatConfigItem } from '../types.js';
import pluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments';

export function eslintComments(): FlatConfigItem {
	return {
		name: 'directus/eslint-comments',
		plugins: {
			'@eslint-community/eslint-comments': pluginEslintComments,
		},
		rules: pluginEslintComments.configs.recommended.rules ?? {},
	};
}
