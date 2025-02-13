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
import { isInEditor } from './globals.js';

function directusConfig(): FlatConfigComposer<LinterConfig> {
	if (isInEditor) {
		// eslint-disable-next-line no-console
		console.log('[@directus/eslint-config] Detected running in editor, some rules are disabled.');
	}

	// if (enableVue) {
	const componentExtensions = [];
	componentExtensions.push('vue');
	// }

	const configs: FlatConfigItem = [
		ignores(),
		javascript(),
		eslintComments(),
		node(),
		jsdoc(),
		imports(),
		command(),
		perfectionist(),
		unicorn(),
		typescript({
			componentExts: componentExtensions,
		}),
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
		// markdown({componentExts,},),
		disables(),

	];

	let composer = new FlatConfigComposer<LinterConfig>(...configs);

	if (isInEditor) {
		composer = composer
			.disableRulesFix([
				'unused-imports/no-unused-imports',
				'test/no-only-tests',
				'prefer-const',
			], {
				builtinRules: () => import(['eslint', 'use-at-your-own-risk'].join('/')).then(r => r.builtinRules),
			});
	}

	return composer;
}

export default await directusConfig();
