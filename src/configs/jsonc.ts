import type { FlatConfigItem } from '../types.js';
import pluginJsonc from 'eslint-plugin-jsonc';
import parserJsonc from 'jsonc-eslint-parser';
import { GLOB_JSON } from '../globs.js';
import { extractRules } from '../utils.js';

export function jsonc(): FlatConfigItem {
	return [
		{
			name: 'directus/jsonc',
			files: [GLOB_JSON],
			plugins: {
				jsonc: pluginJsonc,
			},
			languageOptions: {
				parser: parserJsonc,
			},
			rules: {
				...extractRules(pluginJsonc.configs['flat/recommended-with-jsonc']),

				'jsonc/no-octal-escape': 'error',

				// Stylistic
				'jsonc/array-bracket-spacing': ['error', 'never'],
				'jsonc/comma-dangle': ['error', 'never'],
				'jsonc/comma-style': ['error', 'last'],
				'jsonc/indent': ['error', 'tab'],
				'jsonc/key-spacing': ['error', { afterColon: true, beforeColon: false }],
				'jsonc/object-curly-newline': ['error', { consistent: true, multiline: true }],
				'jsonc/object-curly-spacing': ['error', 'always'],
				'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],

				// Disables
				'unused-imports/no-unused-vars': 'off',
			},
		},
	];
}
