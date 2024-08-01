import type { DirectusOptions, EslintResult } from './types.js';
import antfu from '@antfu/eslint-config';
import { antfuOptions as antfuOptionsDefaults, eslintConfig as eslintConfigDefaults } from './defaults.js';

export default function directusConfig(options?: DirectusOptions): EslintResult {
	const antfuOptions = { ...antfuOptionsDefaults };
	const eslintConfig = [eslintConfigDefaults];

	if (options?.vue === true)
		antfuOptions.vue = true;

	if (options?.typescript === false)
		antfuOptions.typescript = false;

	if (options?.eslintConfig)
		eslintConfig.push(options.eslintConfig);

	return antfu(antfuOptions, ...eslintConfig);
}
