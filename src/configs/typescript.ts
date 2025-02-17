import type {
	FlatConfigItem,
} from '../types.js';
import pluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import { GLOB_TS, GLOB_VUE } from '../globs.js';

export function typescript(): FlatConfigItem {
	return {
		name: 'directus/typescript',
		files: [GLOB_TS, GLOB_VUE],
		plugins: {
			'@typescript-eslint': pluginTs,
		},
		languageOptions: {
			parser: parserTs,
			parserOptions: {
				extraFileExtensions: ['.vue'],
				sourceType: 'module',
			},
		},
		rules: {
			...pluginTs.configs['eslint-recommended']!.overrides![0]!.rules,
			...pluginTs.configs['strict']!.rules,

			'@typescript-eslint/no-dynamic-delete': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/unified-signatures': 'off',
			// checked via 'unused-imports/no-unused-vars'
			'@typescript-eslint/no-unused-vars': 'off',

			// Additional rules/overrides, borrowed from https://github.com/antfu/eslint-config
			'@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
			'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
			'@typescript-eslint/consistent-type-imports': ['error', {
				disallowTypeAnnotations: false,
				fixStyle: 'separate-type-imports',
				prefer: 'type-imports',
			}],
			'@typescript-eslint/method-signature-style': ['error', 'property'], // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
			'@typescript-eslint/no-dupe-class-members': 'error',
			'@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'always' }],
			'@typescript-eslint/no-import-type-side-effects': 'error',
			'@typescript-eslint/no-redeclare': ['error', { builtinGlobals: false }],
			'@typescript-eslint/no-unused-expressions': ['error', {
				allowShortCircuit: true,
				allowTaggedTemplates: true,
				allowTernary: true,
			}],
			'no-use-before-define': 'off',
			'@typescript-eslint/no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
		},
	};
}
