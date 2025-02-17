import type { FlatConfigItem } from '../types.js';
import pluginImportX from 'eslint-plugin-import-x';

export function imports(): FlatConfigItem {
	return {
		name: 'directus/imports',
		plugins: {
			'import-x': pluginImportX,
		},
		rules: {
			// Internal checks, without resolving (left to TypeScript or tests)
			'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
			'import-x/no-duplicates': 'error',
			'import-x/no-mutable-exports': 'error',
			'import-x/no-named-as-default': 'error',
			'import-x/no-self-import': 'error',
			'import-x/newline-after-import': ['error', { count: 1 }],

			// Not enforced until there's a fix available, see https://github.com/directus/eslint-config/issues/2
			'import-x/first': 'off',
		},
	};
}
