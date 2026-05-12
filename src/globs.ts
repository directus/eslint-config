const GLOB_JS_TS_EXT: string = '?(c|m)[jt]s';

export const GLOB_JS_TS: string = `**/*.${GLOB_JS_TS_EXT}`;
export const GLOB_TS: string = '**/*.?(c|m)ts';
export const GLOB_VUE: string = '**/*.vue';

export const GLOB_JSON: string = '**/*.json?(c|5)';
export const GLOB_YAML: string = '**/*.y?(a)ml';
export const GLOB_TOML: string = '**/*.toml';
export const GLOB_MARKDOWN: string = '**/*.md';
export const GLOB_STYLE: string = '**/*.{c,sc}ss';
export const GLOB_HTML: string = '**/*.html';
export const GLOB_GRAPHQL: string = '**/*.{g,graph}ql';

export const GLOBS_CODE: string[] = [GLOB_JS_TS, GLOB_VUE];
export const GLOBS_CONFIG: string[] = [GLOB_JSON, GLOB_YAML, GLOB_TOML];

export const GLOBS_TEST: string[] = [
	`**/__tests__/**/*.${GLOB_JS_TS_EXT}`,
	`**/*.spec.${GLOB_JS_TS_EXT}`,
	`**/*.test.${GLOB_JS_TS_EXT}`,
];

export const GLOBS_EXCLUDE: string[] = [
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
