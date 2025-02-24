import type { FlatConfigItem } from '../types.js';
import pluginImportX from 'eslint-plugin-import-x';
import { GLOB_VUE, GLOBS_CODE } from '../globs.js';

export function imports(): FlatConfigItem {
	return [{
		name: 'directus/imports',
		files: GLOBS_CODE,
		plugins: {
			'import-x': pluginImportX,
		},
		rules: {
			// Internal checks, without resolving (left to TypeScript or tests)
			'import-x/first': 'error',
			'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
			'import-x/no-duplicates': 'error',
			'import-x/no-mutable-exports': 'error',
			'import-x/no-named-as-default': 'error',
			'import-x/no-self-import': 'error',
		},
	},	{
		name: 'directus/imports/vue',
		files: [GLOB_VUE],
		rules: {
			// Not enforced until there's a fix available, see https://github.com/directus/eslint-config/issues/2
			'import-x/first': 'off',
		},
	}];
}
