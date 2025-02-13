import type { FlatConfigItem } from '../types.js';
import pluginVitest from '@vitest/eslint-plugin';
// @ts-expect-error untyped module
import pluginNoOnlyTests from 'eslint-plugin-no-only-tests';
import { GLOB_TESTS, isInEditor } from '../globals.js';

// Hold the reference so we don't redeclare the plugin on each call
let _pluginTest: any;

export function test(
): FlatConfigItem {
	_pluginTest = _pluginTest || {
		...pluginVitest,
		rules: {
			...pluginVitest.rules,
			// extend `test/no-only-tests` rule
			...pluginNoOnlyTests.rules,
		},
	};

	return [
		{
			name: 'directus/test/setup',
			plugins: {
				test: _pluginTest,
			},
		},
		{
			files: GLOB_TESTS,
			name: 'directus/test/rules',
			rules: {
				'test/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
				'test/no-identical-title': 'error',
				'test/no-import-node-test': 'error',
				'test/no-only-tests': isInEditor ? 'warn' : 'error',

				'test/prefer-hooks-in-order': 'error',
				'test/prefer-lowercase-title': 'error',

				// Disables
				'no-unused-expressions': 'off',
				'node/prefer-global/process': 'off',
				'ts/explicit-function-return-type': 'off',
			},
		},
	];
}
