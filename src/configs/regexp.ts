import type { FlatConfigItem } from '../types.js';
import * as pluginRegexp from 'eslint-plugin-regexp';

export function regexp(): FlatConfigItem {
	return {
		name: 'directus/regexp',
		plugins: {
			regexp: pluginRegexp,
		},
		rules: pluginRegexp.configs['flat/recommended'].rules,
	};
}
