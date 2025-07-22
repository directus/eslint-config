import type {
	FlatConfigItem,
} from '../types.js';
import parserTs from '@typescript-eslint/parser';
import { mergeProcessors } from 'eslint-merge-processors';
import pluginVue from 'eslint-plugin-vue';
import	processorVueBlocks from 'eslint-processor-vue-blocks';
import	parserVue from 'vue-eslint-parser';
import { GLOB_VUE } from '../globs.js';
import { extractRules } from '../utils.js';

export function vue(): FlatConfigItem {
	return {
		name: 'directus/vue',
		files: [GLOB_VUE],
		languageOptions: {
			parser: parserVue,
			parserOptions: {
				extraFileExtensions: ['.vue'],
				parser: parserTs,
				sourceType: 'module',
			},
			// This allows Vue plugin to work with auto imports
			// https://github.com/vuejs/eslint-plugin-vue/pull/2422
			globals: {
				computed: 'readonly',
				defineEmits: 'readonly',
				defineExpose: 'readonly',
				defineProps: 'readonly',
				onMounted: 'readonly',
				onUnmounted: 'readonly',
				reactive: 'readonly',
				ref: 'readonly',
				shallowReactive: 'readonly',
				shallowRef: 'readonly',
				toRef: 'readonly',
				toRefs: 'readonly',
				watch: 'readonly',
				watchEffect: 'readonly',
			},
		},
		plugins: {
			vue: pluginVue,
		},
		processor: mergeProcessors([
			pluginVue.processors['.vue'],
			processorVueBlocks({
				blocks: {
					styles: true,
				},
			}),
		]),
		rules: {
			...extractRules(pluginVue.configs['flat/recommended']),

			'vue/require-default-prop': 'off',
			'vue/max-attributes-per-line': 'off',
			'vue/multi-word-component-names': 'off',
			// deprecated but still in recommended
			'vue/component-tags-order': 'off',

			'vue/prefer-true-attribute-shorthand': 'error',
			'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
			'vue/block-order': ['error', {
				order: ['script', 'template', 'style'],
			}],

			// Additional rules/overrides, borrowed from https://github.com/antfu/eslint-config
			'vue/component-name-in-template-casing': ['error', 'PascalCase'],
			'vue/component-options-name-casing': ['error', 'PascalCase'],
			'vue/custom-event-name-casing': ['error', 'camelCase'],
			'vue/prop-name-casing': ['error', 'camelCase'],
			'vue/define-macros-order': ['error', {
				order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
			}],
			'vue/dot-location': ['error', 'property'],
			'vue/dot-notation': ['error', { allowKeywords: true }],
			'vue/eqeqeq': ['error', 'smart'],
			'vue/no-empty-pattern': 'error',
			'vue/no-irregular-whitespace': 'error',
			'vue/no-loss-of-precision': 'error',
			'vue/no-restricted-syntax': [
				'error',
				'DebuggerStatement',
				'LabeledStatement',
				'WithStatement',
			],
			'vue/no-restricted-v-bind': ['error', '/^v-/'],
			'vue/no-setup-props-reactivity-loss': 'off',
			'vue/no-sparse-arrays': 'error',
			'vue/no-unused-refs': 'error',
			'vue/no-useless-v-bind': 'error',
			'vue/object-shorthand': [
				'error',
				'always',
				{
					avoidQuotes: true,
					ignoreConstructors: false,
				},
			],
			'vue/prefer-separate-static-class': 'error',
			'vue/prefer-template': 'error',
			'vue/space-infix-ops': 'error',
			'vue/space-unary-ops': ['error', { nonwords: false, words: true }],

			// Stylistic
			'vue/html-indent': ['error', 'tab'],
			'vue/html-quotes': ['error', 'double'],
			'vue/array-bracket-spacing': ['error', 'never'],
			'vue/arrow-spacing': ['error', { after: true, before: true }],
			'vue/block-spacing': ['error', 'always'],
			'vue/block-tag-newline': ['error', {
				multiline: 'always',
				singleline: 'always',
			}],
			'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
			'vue/comma-dangle': ['error', 'always-multiline'],
			'vue/comma-spacing': ['error', { after: true, before: false }],
			'vue/comma-style': ['error', 'last'],
			'vue/html-comment-content-spacing': ['error', 'always', {
				exceptions: ['-'],
			}],
			'vue/key-spacing': ['error', { afterColon: true, beforeColon: false }],
			'vue/keyword-spacing': ['error', { after: true, before: true }],
			'vue/object-curly-newline': 'off',
			'vue/object-curly-spacing': ['error', 'always'],
			'vue/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
			'vue/operator-linebreak': ['error', 'before', { overrides: { '=': 'after' } }],
			'vue/padding-line-between-blocks': ['error', 'always'],
			'vue/quote-props': ['error', 'consistent-as-needed'],
			'vue/space-in-parens': ['error', 'never'],
			'vue/template-curly-spacing': 'error',
		},
	};
}
