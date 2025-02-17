import type { FlatConfigItem } from '../types.js';
import gitignore from 'eslint-config-flat-gitignore';
import { GLOB_EXCLUDE } from '../globs.js';

export function ignores(): FlatConfigItem {
	const { ignores } = gitignore({
		strict: false,
	});

	return {
		name: 'directus/ignores',
		ignores: [...ignores, ...GLOB_EXCLUDE],
	};
}
