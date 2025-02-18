import type { FlatConfigItem, LinterConfig } from './types.js';
import { FlatConfigComposer } from 'eslint-flat-config-utils';
import {
	command,
	disables,
	dprint,
	eslintComments,
	ignores,
	imports,
	javascript,
	jsdoc,
	jsonc,
	markdown,
	node,
	perfectionist,
	regexp,
	sortPackageJson,
	sortTsconfig,
	stylistic,
	test,
	toml,
	typescript,
	unicorn,
	vue,
	yaml,
} from './configs/index.js';
import { isInEditorEnv } from './utils.js';

export const isInEditor = isInEditorEnv();

export function createConfig(): FlatConfigComposer<LinterConfig> {
	if (isInEditor) {
		// eslint-disable-next-line no-console
		console.log('[@directus/eslint-config] Detected running in editor, some rules are disabled.');
	}

	const configs: FlatConfigItem[] = [
		ignores(),
		javascript(),
		eslintComments(),
		node(),
		jsdoc(),
		imports(),
		command(),
		perfectionist(),
		unicorn(),
		typescript(),
		stylistic(),
		regexp(),
		test(),
		vue(),
		jsonc(),
		sortPackageJson(),
		sortTsconfig(),
		dprint(),
		yaml(),
		toml(),
		markdown(),
		disables(),

	];

	let composer = new FlatConfigComposer<LinterConfig>(...configs);

	if (isInEditor) {
		composer = composer
			.disableRulesFix([
				'prefer-const',
				'unused-imports/no-unused-imports',
			], {
				// Required for patching core rules like `prefer-const` (rules without a plugin prefix)
				builtinRules: () => import(['eslint', 'use-at-your-own-risk'].join('/')).then((r) => r.builtinRules),
			});
	}

	return composer;
}
