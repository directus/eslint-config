import type { FlatConfigItem } from '../types.js';
import { GLOB_JS_TS } from '../globs.js';

export function disables(): FlatConfigItem {
	return [
		{
			name: 'directus/disables/scripts',
			files: [`**/scripts/${GLOB_JS_TS}`],
			rules: {
				'no-console': 'off',
			},
		},
	];
}
