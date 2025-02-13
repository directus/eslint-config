import type { FlatConfigItem } from '../types.js';
import pluginMarkdown from '@eslint/markdown';
import { mergeProcessors, processorPassThrough } from 'eslint-merge-processors';
import * as parserPlain from 'eslint-parser-plain';
import { GLOB_MARKDOWN, GLOB_MARKDOWN_CODE, GLOB_MARKDOWN_IN_MARKDOWN } from '../globals.js';

export async function markdown(): FlatConfigItem {
	const files = [GLOB_MARKDOWN];
	const componentExts = [];

	return [
		{
			name: 'directus/markdown/setup',
			plugins: {
				markdown: pluginMarkdown,
			},
		},
		{
			files,
			ignores: [GLOB_MARKDOWN_IN_MARKDOWN],
			name: 'directus/markdown/processor',
			// `eslint-plugin-markdown` only creates virtual files for code blocks,
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
			files: [
				GLOB_MARKDOWN_CODE,
				...componentExts.map(ext => `${GLOB_MARKDOWN}/**/*.${ext}`),
			],
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

				'no-unused-vars': 'off',
				'node/prefer-global/process': 'off',
				'style/comma-dangle': 'off',

				'style/eol-last': 'off',
				'ts/consistent-type-imports': 'off',
				'ts/explicit-function-return-type': 'off',
				'ts/no-namespace': 'off',
				'ts/no-redeclare': 'off',
				'ts/no-require-imports': 'off',
				'ts/no-unused-expressions': 'off',
				'ts/no-unused-vars': 'off',
				'ts/no-use-before-define': 'off',

				'unicode-bom': 'off',
				'unused-imports/no-unused-imports': 'off',
				'unused-imports/no-unused-vars': 'off',
			},
		},
	];
}
