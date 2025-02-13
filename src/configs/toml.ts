import type { FlatConfigItem } from '../types.js';
import pluginToml from 'eslint-plugin-toml';
import parserToml from 'toml-eslint-parser';
import { GLOB_TOML, stylisticConfig } from '../globals.js';

export function toml(
): FlatConfigItem {
	const { indent } = stylisticConfig;

	return [
		{
			name: 'directus/toml/setup',
			plugins: {
				toml: pluginToml,
			},
		},
		{
			files: [GLOB_TOML],
			languageOptions: {
				parser: parserToml,
			},
			name: 'directus/toml/rules',
			rules: {
				'style/spaced-comment': 'off',

				'toml/comma-style': 'error',
				'toml/keys-order': 'error',
				'toml/no-space-dots': 'error',
				'toml/no-unreadable-number-separator': 'error',
				'toml/precision-of-fractional-seconds': 'error',
				'toml/precision-of-integer': 'error',
				'toml/tables-order': 'error',

				'toml/vue-custom-block/no-parsing-error': 'error',

				// stylistic
				'toml/array-bracket-newline': 'error',
				'toml/array-bracket-spacing': 'error',
				'toml/array-element-newline': 'error',
				'toml/indent': ['error', indent === 'tab' ? 2 : indent],
				'toml/inline-table-curly-spacing': 'error',
				'toml/key-spacing': 'error',
				'toml/padding-line-between-pairs': 'error',
				'toml/padding-line-between-tables': 'error',
				'toml/quoted-keys': 'error',
				'toml/spaced-comment': 'error',
				'toml/table-bracket-spacing': 'error',

			},
		},
	];
}
