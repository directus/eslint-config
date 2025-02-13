import type {
	FlatConfigItem,
} from '../types.js';
import pluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';

import { GLOB_TS } from '../globals.js';
import { renameRules } from '../utils.js';

export function typescript(): FlatConfigItem {
	const componentExts = [];
	const type = 'app';

	const files = [
		GLOB_TS,
		...componentExts.map(ext => `**/*.${ext}`),
	];

	return [
		{
			name: 'directus/typescript',
			files,
			plugins: {
				// antfu: pluginAntfu,
				ts: pluginTs,
			},
			languageOptions: {
				parser: parserTs,
				parserOptions: {
					extraFileExtensions: componentExts.map(ext => `.${ext}`),
					sourceType: 'module',
				},
			},
		},
		{
			files,
			name: 'directus/typescript/rules',
			rules: {
				...renameRules(
					pluginTs.configs['eslint-recommended'].overrides![0].rules!,
					{ '@typescript-eslint': 'ts' },
				),
				...renameRules(
					pluginTs.configs.strict.rules!,
					{ '@typescript-eslint': 'ts' },
				),
				'no-dupe-class-members': 'off',
				'no-redeclare': 'off',
				'no-use-before-define': 'off',
				'no-useless-constructor': 'off',
				'ts/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
				'ts/consistent-type-definitions': ['error', 'interface'],
				'ts/consistent-type-imports': ['error', {
					disallowTypeAnnotations: false,
					fixStyle: 'separate-type-imports',
					prefer: 'type-imports',
				}],

				'ts/method-signature-style': ['error', 'property'], // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
				'ts/no-dupe-class-members': 'error',
				'ts/no-dynamic-delete': 'off',
				'ts/no-empty-object-type': ['error', { allowInterfaces: 'always' }],
				'ts/no-explicit-any': 'off',
				'ts/no-extraneous-class': 'off',
				'ts/no-import-type-side-effects': 'error',
				'ts/no-invalid-void-type': 'off',
				'ts/no-non-null-assertion': 'off',
				'ts/no-redeclare': ['error', { builtinGlobals: false }],
				'ts/no-require-imports': 'error',
				'ts/no-unused-expressions': ['error', {
					allowShortCircuit: true,
					allowTaggedTemplates: true,
					allowTernary: true,
				}],
				'ts/no-unused-vars': 'off',
				'ts/no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
				'ts/no-useless-constructor': 'off',
				'ts/no-wrapper-object-types': 'error',
				'ts/triple-slash-reference': 'off',
				'ts/unified-signatures': 'off',

				...(type === 'lib'
					? {
							'ts/explicit-function-return-type': ['error', {
								allowExpressions: true,
								allowHigherOrderFunctions: true,
								allowIIFEs: true,
							}],
						}
					: {}
				),
			},
		},
	];
}
