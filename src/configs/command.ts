import type { FlatConfigItem } from '../types.js';
import pluginCommandConfig from 'eslint-plugin-command/config';

export function command(): FlatConfigItem {
	const config = pluginCommandConfig();

	return {
		name: 'directus/command',
		plugins: config.plugins!,
		rules: config.rules!,
	};
}
