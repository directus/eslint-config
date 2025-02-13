import type { FlatConfigItem } from '../types.js';
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginAntfu from 'eslint-plugin-antfu';
import { stylisticConfig } from '../globals.js';

export function stylistic(): FlatConfigItem {
	const config = pluginStylistic.configs.customize({
		pluginName: 'stylistic',
		...stylisticConfig,
	});

	return [
		{
			name: 'directus/stylistic',
			plugins: {
				stylistic: pluginStylistic,
				antfu: pluginAntfu,
			},
			rules: {
				...config.rules,

				'antfu/consistent-chaining': 'error',
				'antfu/consistent-list-newline': 'error',
				'antfu/curly': 'error',
				'antfu/if-newline': 'error',
			},
		},
	];
}
