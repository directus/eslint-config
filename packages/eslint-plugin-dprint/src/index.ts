import type { ESLint } from 'eslint';
import packageJson from '../package.json' with { type: 'json' };
import dprint from './rule.js';

const plugin: ESLint.Plugin = {
	meta: {
		name: packageJson.name,
		version: packageJson.version,
	},
	rules: {
		dprint,
	},
};

export default plugin;
