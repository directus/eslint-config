import type { FlatConfigItem } from '../types.js';
import { GLOB_SRC } from '../globs.js';

export function disables(): FlatConfigItem {
	return [
		{
			name: 'directus/disables/scripts',
			files: [`**/scripts/${GLOB_SRC}`],
			rules: {
				'no-console': 'off',
			},
		},
	];
}
