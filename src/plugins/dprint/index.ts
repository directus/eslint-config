import type { ESLint } from 'eslint';
import dprint from './rule.js';

const plugin: ESLint.Plugin = {
	meta: {
		name: 'dprint',
	},
	rules: {
		dprint,
	},
};

export default plugin;
