import type { FlatConfigItem } from '../types.js';
import * as pluginRegexp from 'eslint-plugin-regexp';
import { GLOBS_CODE } from '../globs.js';

export function regexp(): FlatConfigItem {
	return {
		name: 'directus/regexp',
		files: GLOBS_CODE,
		plugins: {
			regexp: pluginRegexp,
		},
		rules: pluginRegexp.configs['flat/recommended'].rules,
	};
}
