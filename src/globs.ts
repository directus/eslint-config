export const GLOB_SRC_EXT = '?([cm])[jt]s';
export const GLOB_SRC = `**/*.${GLOB_SRC_EXT}`;

export const GLOB_TS = '**/*.?([cm])ts';
export const GLOB_STYLE = '**/*.{c,sc}ss';
export const GLOB_JSON = '**/*.json?([c5])';
export const GLOB_MARKDOWN = '**/*.md';
export const GLOB_VUE = '**/*.vue';
export const GLOB_YAML = '**/*.y?(a)ml';
export const GLOB_TOML = '**/*.toml';
export const GLOB_HTML = '**/*.html';
export const GLOB_GRAPHQL = '**/*.{g,graph}ql';
export const GLOB_DOCKERFILE = '**/Dockerfile?(.*)';

export const GLOB_TESTS = [
	`**/__tests__/**/*.${GLOB_SRC_EXT}`,
	`**/*.spec.${GLOB_SRC_EXT}`,
	`**/*.test.${GLOB_SRC_EXT}`,
	`**/*.bench.${GLOB_SRC_EXT}`,
	`**/*.benchmark.${GLOB_SRC_EXT}`,
];

export const GLOB_EXCLUDE = [
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
