import type { FlatConfigItem } from '../types.js';
import { GLOB_SRC } from '../globals.js';

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
