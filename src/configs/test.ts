import type { FlatConfigItem } from '../types.js';
import pluginVitest from '@vitest/eslint-plugin';
import { isInEditor } from '../config.js';
import { GLOBS_TEST } from '../globs.js';

export function test(): FlatConfigItem {
	return {
		name: 'directus/test',
		plugins: {
			vitest: pluginVitest,
		},
		files: GLOBS_TEST,
		rules: {
			...pluginVitest.configs.recommended.rules,

			'vitest/valid-title': 'off',

			'vitest/prefer-hooks-in-order': 'error',
			'vitest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
			'vitest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
			'vitest/no-focused-tests': isInEditor ? 'warn' : 'error',
			'vitest/no-disabled-tests': isInEditor ? 'warn' : 'error',

			// Disables
			'no-unused-expressions': 'off',
			'n/prefer-global/process': 'off',
		},
	};
}
