import type { FlatConfigItem } from '../types.js';
import js from '@eslint/js';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import { isInEditor } from '../globals.js';

export function javascript(): FlatConfigItem {
	return {
		name: 'directus/javascript',
		languageOptions: {
			ecmaVersion: 2023,
			globals: {
				...globals.browser,
				...globals.es2023,
				...globals.node,
			},
		},
		plugins: {
			'unused-imports': pluginUnusedImports,
		},
		rules: {
			...js.configs.recommended.rules,

			// rules borrowed and adjusted from https://github.com/antfu/eslint-config
			'accessor-pairs': ['error', { enforceForClassMembers: true, setWithoutGet: true }],
			'array-callback-return': 'error',
			'block-scoped-var': 'error',
			'default-case-last': 'error',
			'eqeqeq': ['error', 'smart'],
			'new-cap': ['error', { capIsNew: false, newIsCap: true, properties: true }],
			'no-alert': 'error',
			'no-array-constructor': 'error',
			'no-caller': 'error',
			'no-console': ['error', { allow: ['warn', 'error'] }],
			'no-empty': ['error', { allowEmptyCatch: true }],
			'no-eval': 'error',
			'no-extend-native': 'error',
			'no-extra-bind': 'error',
			'no-implied-eval': 'error',
			'no-iterator': 'error',
			'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
			'no-lone-blocks': 'error',
			'no-multi-str': 'error',
			'no-new': 'error',
			'no-new-func': 'error',
			'no-new-wrappers': 'error',
			'no-octal-escape': 'error',
			'no-proto': 'error',
			'no-restricted-globals': [
				'error',
				{ message: 'Use `globalThis` instead.', name: 'global' },
				{ message: 'Use `globalThis` instead.', name: 'self' },
			],
			'no-restricted-properties': [
				'error',
				{ message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.', property: '__proto__' },
				{ message: 'Use `Object.defineProperty` instead.', property: '__defineGetter__' },
				{ message: 'Use `Object.defineProperty` instead.', property: '__defineSetter__' },
				{ message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupGetter__' },
				{ message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupSetter__' },
			],
			'no-restricted-syntax': [
				'error',
				'TSEnumDeclaration[const=true]',
				'TSExportAssignment',
			],
			'no-self-compare': 'error',
			'no-sequences': 'error',
			'no-template-curly-in-string': 'error',
			'no-throw-literal': 'error',
			'no-undef-init': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-unneeded-ternary': ['error', { defaultAssignment: false }],
			'no-unreachable-loop': 'error',
			'no-unused-expressions': ['error', {
				allowShortCircuit: true,
				allowTaggedTemplates: true,
				allowTernary: true,
			}],
			'no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
			'no-useless-call': 'error',
			'no-useless-computed-key': 'error',
			'no-useless-constructor': 'error',
			'no-useless-rename': 'error',
			'no-useless-return': 'error',
			'no-var': 'error',
			'object-shorthand': [
				'error',
				'always',
				{
					avoidQuotes: true,
					ignoreConstructors: false,
				},
			],
			'one-var': ['error', { initialized: 'never' }],
			'prefer-arrow-callback': [
				'error',
				{
					allowNamedFunctions: false,
					allowUnboundThis: true,
				},
			],
			'prefer-const': [
				isInEditor ? 'warn' : 'error',
				{
					destructuring: 'all',
					ignoreReadBeforeAssign: true,
				},
			],
			'prefer-exponentiation-operator': 'error',
			'prefer-promise-reject-errors': 'error',
			'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'prefer-template': 'error',
			'symbol-description': 'error',
			'unicode-bom': ['error', 'never'],
			'use-isnan': ['error', { enforceForIndexOf: true, enforceForSwitchCase: true }],
			'valid-typeof': ['error', { requireStringLiterals: true }],
			'vars-on-top': 'error',
			'yoda': ['error', 'never'],

			'no-unused-vars': 'off',
			'unused-imports/no-unused-imports': isInEditor ? 'warn' : 'error',
			'unused-imports/no-unused-vars': [
				'error',
				{
					args: 'after-used',
					argsIgnorePattern: '^_',
					ignoreRestSiblings: true,
					vars: 'all',
					varsIgnorePattern: '^_',
				},
			],
		},
	};
}
