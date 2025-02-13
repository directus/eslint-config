import type { FlatConfigItem } from '../types.js';
import pluginYaml from 'eslint-plugin-yml';
import parserYaml from 'yaml-eslint-parser';
import { GLOB_YAML, stylisticConfig } from '../globals.js';

export function yaml(): FlatConfigItem {
	const {
		indent,
		quotes,
	} = stylisticConfig;

	return {
		name: 'directus/yaml',
		files: [GLOB_YAML],
		plugins: {
			yaml: pluginYaml,
		},
		languageOptions: {
			parser: parserYaml,
		},
		rules: {
			'style/spaced-comment': 'off',

			'yaml/block-mapping': 'error',
			'yaml/block-sequence': 'error',
			'yaml/no-empty-key': 'error',
			'yaml/no-empty-sequence-entry': 'error',
			'yaml/no-irregular-whitespace': 'error',
			'yaml/plain-scalar': 'error',

			'yaml/vue-custom-block/no-parsing-error': 'error',

			// stylistic
			'yaml/block-mapping-question-indicator-newline': 'error',
			'yaml/block-sequence-hyphen-indicator-newline': 'error',
			'yaml/flow-mapping-curly-newline': 'error',
			'yaml/flow-mapping-curly-spacing': 'error',
			'yaml/flow-sequence-bracket-newline': 'error',
			'yaml/flow-sequence-bracket-spacing': 'error',
			'yaml/indent': ['error', indent === 'tab' ? 2 : indent],
			'yaml/key-spacing': 'error',
			'yaml/no-tab-indent': 'error',
			'yaml/quotes': ['error', { avoidEscape: true, prefer: quotes === 'backtick' ? 'single' : quotes }],
			'yaml/spaced-comment': 'error',
		},
	};
}
