import type { FlatConfigItem } from '../types.js';
import pluginMarkdown from '@eslint/markdown';
import { mergeProcessors, processorPassThrough } from 'eslint-merge-processors';
import * as parserPlain from 'eslint-parser-plain';
import { GLOB_MARKDOWN, GLOB_SRC, GLOB_VUE } from '../globs.js';

export function markdown(): FlatConfigItem {
	const files = [GLOB_MARKDOWN];
	const markdownInMarkdown = `${GLOB_MARKDOWN}/*.md`;
	const codeInMarkdown = [GLOB_SRC, GLOB_VUE];

	return [
		{
			name: 'directus/markdown/setup',
			plugins: {
				markdown: pluginMarkdown,
			},
		},
		{
			files,
			ignores: [markdownInMarkdown],
			name: 'directus/markdown/processor',
			// `@eslint/markdown` only creates virtual files for code blocks,
			// but not the markdown file itself. We use `eslint-merge-processors` to
			// add a pass-through processor for the markdown file itself.
			processor: mergeProcessors([
				pluginMarkdown.processors.markdown,
				processorPassThrough,
			]),
		},
		{
			name: 'directus/markdown/parser',
			files,
			languageOptions: {
				parser: parserPlain,
			},
		},
		{
			name: 'directus/markdown/disables',
			files: codeInMarkdown.map((glob) => `${GLOB_MARKDOWN}/${glob}`),
			languageOptions: {
				parserOptions: {
					ecmaFeatures: {
						impliedStrict: true,
					},
				},
			},
			rules: {
				'import/newline-after-import': 'off',

				'no-alert': 'off',
				'no-console': 'off',
				'no-labels': 'off',
				'no-lone-blocks': 'off',
				'no-restricted-syntax': 'off',
				'no-undef': 'off',
				'no-unused-expressions': 'off',
				'no-unused-labels': 'off',
				'unicode-bom': 'off',

				'unused-imports/no-unused-imports': 'off',
				'unused-imports/no-unused-vars': 'off',

				'n/prefer-global/process': 'off',

				'@stylistic/comma-dangle': 'off',
				'@stylistic/eol-last': 'off',

				'@typescript-eslint/consistent-type-imports': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/no-namespace': 'off',
				'@typescript-eslint/no-redeclare': 'off',
				'@typescript-eslint/no-require-imports': 'off',
				'@typescript-eslint/no-unused-expressions': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
				'@typescript-eslint/no-use-before-define': 'off',
			},
		},
	];
}
