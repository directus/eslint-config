import type { FlatConfigItem } from '../types.js';
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginAntfu from 'eslint-plugin-antfu';
import { GLOBS_CODE, GLOBS_CONFIG } from '../globs.js';

export function stylistic(): FlatConfigItem {
	const config = pluginStylistic.configs.customize({
		indent: 'tab',
		semi: true,
		arrowParens: true,
	});

	return {
		name: 'directus/stylistic',
		files: [...GLOBS_CODE, ...GLOBS_CONFIG],
		plugins: {
			'@stylistic': pluginStylistic,
			'antfu': pluginAntfu,
		},
		rules: {
			...config.rules,

			'@stylistic/brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
			'@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: 'avoidEscape' }],
			'@stylistic/padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',
					prev: [
						'block',
						'block-like',
						'class',
						'import',
						'export',
						'multiline-block-like',
						'multiline-expression',
					],
					next: '*',
				},
				{
					blankLine: 'always',
					prev: ['const', 'let'],
					next: ['block', 'block-like', 'class', 'export'],
				},
				{
					blankLine: 'always',
					prev: '*',
					next: ['multiline-block-like', 'multiline-expression'],
				},
				{ blankLine: 'any', prev: ['case'], next: ['case', 'default'] },
				{ blankLine: 'any', prev: ['import'], next: ['import'] },
				{ blankLine: 'any', prev: ['export'], next: ['export'] },
			],
			'@stylistic/operator-linebreak': ['error', 'before', { overrides: { '=': 'after' } }],

			'antfu/curly': 'error',
			'antfu/consistent-chaining': 'error',
			'antfu/consistent-list-newline': 'error',
		},
	};
}
