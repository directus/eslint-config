import type { FlatConfigItem } from '../types.js';
import pluginImport from 'eslint-plugin-import-x';

export function imports(): FlatConfigItem {
	return {
		name: 'directus/imports',
		plugins: {
			import: pluginImport,
		},
		rules: {
			'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
			'import/no-duplicates': 'error',
			'import/no-mutable-exports': 'error',
			'import/no-named-as-default': 'error',
			'import/no-named-as-default-member': 'error',
			'import/no-self-import': 'error',
			'import/newline-after-import': ['error', { count: 1 }],

			// ignored until there's a fix available, see https://github.com/directus/eslint-config/issues/2
			// 'import/first': 'error',
		},
	};
}
