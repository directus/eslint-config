import type { FlatConfigItem } from '../types.js';
import pluginPerfectionist from 'eslint-plugin-perfectionist';

export function perfectionist(): FlatConfigItem {
	return {
		name: 'directus/perfectionist',
		plugins: {
			perfectionist: pluginPerfectionist,
		},
		rules: {
			'perfectionist/sort-exports': ['error', { order: 'asc', type: 'natural' }],
			'perfectionist/sort-imports': ['error', {
				groups: [
					'type',
					['parent-type', 'sibling-type', 'index-type', 'internal-type'],
					'builtin',
					'external',
					'internal',
					['parent', 'sibling', 'index'],
					'side-effect',
					'object',
					'unknown',
				],
				newlinesBetween: 'ignore',
				order: 'asc',
				type: 'natural',
			}],
			'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'natural' }],
			'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'natural' }],
		},
	};
}
