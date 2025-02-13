import type { DprintOptions } from '@directus/eslint-plugin-dprint/rule-options';
import type { FlatConfigItem } from '../types.js';
import pluginDprint from '@directus/eslint-plugin-dprint';
import * as parserPlain from 'eslint-parser-plain';
import { GLOB_GRAPHQL, GLOB_HTML, GLOB_MARKDOWN, GLOB_STYLE, stylisticConfig } from '../globals.js';

export function dprint(): FlatConfigItem {
	const { indent, quotes } = stylisticConfig;

	const globalOptions: DprintOptions = Object.assign(
		{
			indentWidth: typeof indent === 'number' ? indent : 2,
			quoteStyle: quotes === 'single' ? 'preferSingle' : 'preferDouble',
			useTabs: indent === 'tab',
		},
	);

	return {
		name: 'directus/dprint',
		files: [GLOB_STYLE, GLOB_HTML, GLOB_MARKDOWN, GLOB_GRAPHQL],
		plugins: {
			dprint: pluginDprint,
		},
		languageOptions: {
			parser: parserPlain,
		},
		rules: {
			'dprint/dprint': ['error', globalOptions],
		},
	};
}
