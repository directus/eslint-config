import type { FlatConfigItem } from '../types.js';
import pluginYml from 'eslint-plugin-yml';
import parserYaml from 'yaml-eslint-parser';
import { GLOB_YAML } from '../globs.js';
import { extractRules } from '../utils.js';

export function yaml(): FlatConfigItem {
	return {
		name: 'directus/yaml',
		files: [GLOB_YAML],
		plugins: {
			yml: pluginYml,
		},
		languageOptions: {
			parser: parserYaml,
		},
		rules: {
			...extractRules(pluginYml.configs['flat/standard']),

			'yml/quotes': ['error', { avoidEscape: true, prefer: 'single' }],

			// Disables
			'unused-imports/no-unused-vars': 'off',
			'@stylistic/spaced-comment': 'off',
		},
	};
}
