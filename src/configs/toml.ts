import type { FlatConfigItem } from '../types.js';
import pluginToml from 'eslint-plugin-toml';
import parserToml from 'toml-eslint-parser';
import { GLOB_TOML } from '../globs.js';
import { extractRules } from '../utils.js';

export function toml(): FlatConfigItem {
	return {
		name: 'directus/toml',
		files: [GLOB_TOML],
		plugins: {
			toml: pluginToml,
		},
		languageOptions: {
			parser: parserToml,
		},
		rules: {
			...extractRules(pluginToml.configs['flat/standard']),

			// Disables
			'@stylistic/spaced-comment': 'off',
		},
	};
}
