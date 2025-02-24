const GLOB_JS_TS_EXT = '?(c|m)[jt]s';

export const GLOB_JS_TS = `**/*.${GLOB_JS_TS_EXT}`;
export const GLOB_TS = '**/*.?(c|m)ts';
export const GLOB_VUE = '**/*.vue';

export const GLOB_JSON = '**/*.json?(c|5)';
export const GLOB_YAML = '**/*.y?(a)ml';
export const GLOB_TOML = '**/*.toml';
export const GLOB_MARKDOWN = '**/*.md';
export const GLOB_STYLE = '**/*.{c,sc}ss';
export const GLOB_HTML = '**/*.html';
export const GLOB_GRAPHQL = '**/*.{g,graph}ql';

export const GLOBS_CODE = [GLOB_JS_TS, GLOB_VUE];
export const GLOBS_CONFIG = [GLOB_JSON, GLOB_YAML, GLOB_TOML];

export const GLOBS_TEST = [
	`**/__tests__/**/*.${GLOB_JS_TS_EXT}`,
	`**/*.spec.${GLOB_JS_TS_EXT}`,
	`**/*.test.${GLOB_JS_TS_EXT}`,
];

export const GLOBS_EXCLUDE = [
	'**/node_modules',
	'**/dist',
	'**/package-lock.json',
	'**/pnpm-lock.yaml',

	'**/output',
	'**/coverage',
	'**/temp',
	'**/.temp',
	'**/tmp',
	'**/.tmp',
	'**/.history',
	'**/.vitepress/cache',
	'**/.nuxt',
	'**/.vercel',
	'**/.changeset',
	'**/.idea',
	'**/.cache',
	'**/.output',
	'**/.vite-inspect',
	'**/vite.config.*.timestamp-*',

	'**/__snapshots__',
	'**/auto-import?(s).d.ts',
	'**/components.d.ts',
];
