import type { FlatConfigItem } from '../types.js';
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginAntfu from 'eslint-plugin-antfu';

export function stylistic(): FlatConfigItem {
	const config = pluginStylistic.configs.customize({
		indent: 'tab',
		quotes: 'single',
		semi: true,
	});

	return [
		{
			name: 'directus/stylistic',
			plugins: {
				'@stylistic': pluginStylistic,
				'antfu': pluginAntfu,
			},
			rules: {
				...config.rules,

				'@stylistic/arrow-parens': 'error',

				'antfu/consistent-chaining': 'error',
				'antfu/consistent-list-newline': 'error',
				'antfu/curly': 'error',
				'antfu/if-newline': 'error',
			},
		},
	];
}
