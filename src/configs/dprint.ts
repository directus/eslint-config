import type { Linter } from 'eslint';
import type { DprintOptions } from '../plugins/dprint/types.js';
import type { FlatConfigItem } from '../types.js';
import * as parserPlain from 'eslint-parser-plain';
import { GLOB_DOCKERFILE, GLOB_GRAPHQL, GLOB_HTML, GLOB_MARKDOWN, GLOB_STYLE } from '../globs.js';
import pluginDprint from '../plugins/dprint/index.js';

export function dprint(): FlatConfigItem {
	const globalOptions: DprintOptions = {
		useTabs: true,
		lineWidth: 120,
	};

	return [
		{
			name: 'directus/dprint/setup',
			plugins: {
				dprint: pluginDprint,
			},
		},
		createDprintConfig('html', [GLOB_HTML], { whitespaceSensitivity: 'ignore', formatComments: true }),
		createDprintConfig('style', [GLOB_STYLE], { formatComments: true }),
		createDprintConfig('markdown', [GLOB_MARKDOWN], { textWrap: 'always' }),
		createDprintConfig('graphql', [GLOB_GRAPHQL], { formatComments: true }),
		createDprintConfig('dockerfile', [GLOB_DOCKERFILE]),
	];

	function createDprintConfig(name: string, files: string[], languageOptions?: DprintOptions['languageOptions']): Linter.Config {
		const dprintOptions: DprintOptions = {
			...globalOptions,
			...(languageOptions && { languageOptions }),
		};

		return {
			name: `directus/dprint/${name}`,
			files,
			languageOptions: {
				parser: parserPlain,
			},
			rules: {
				'dprint/dprint': ['error', dprintOptions],
			},

		};
	}
}
