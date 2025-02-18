import type { FlatConfigItem } from '../types.js';
import pluginVitest from '@vitest/eslint-plugin';
import { isInEditor } from '../config.js';
import { GLOB_TESTS } from '../globs.js';

export function test(): FlatConfigItem {
	return {
		name: 'directus/test',
		plugins: {
			vitest: pluginVitest,
		},
		files: GLOB_TESTS,
		rules: {
			...pluginVitest.configs.recommended.rules,

			'vitest/prefer-hooks-in-order': 'error',
			'vitest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
			'vitest/prefer-lowercase-title': 'error',
			'vitest/no-focused-tests': isInEditor ? 'warn' : 'error',
			'vitest/no-disabled-tests': isInEditor ? 'warn' : 'error',

			// Disables
			'no-unused-expressions': 'off',
			'n/prefer-global/process': 'off',
		},
	};
}
