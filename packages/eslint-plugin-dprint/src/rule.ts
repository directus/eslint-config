import type { Rule } from 'eslint';
import type { AsyncFormat, Format } from './types.js';
import { fileURLToPath } from 'node:url';
import { messages, reportDifferences } from 'eslint-formatting-reporter';
import { createSyncFn } from 'synckit';

const __DEV___ = true;

let format: Format;

const dprint: Rule.RuleModule = {
	meta: {
		type: 'layout',
		docs: {
			description: 'Use dprint to format code',
			url: 'https://dprint.dev',
		},
		fixable: 'whitespace',
		schema: [
			{
				type: 'object',
				properties: {
					language: {
						type: 'string',
						required: true,
					},
					languageOptions: {
						type: 'object',
					},
				},
				additionalProperties: true,
			},
		],
		messages,
	},
	create(context) {
		if (!format) {
			format = createSyncFn<AsyncFormat>(fileURLToPath(new URL(__DEV___ ? './worker.ts' : './worker.js', import.meta.url)), {
				...(__DEV___ && { tsRunner: 'node' }),
			});
		}

		return {
			Program() {
				const sourceCode = context.sourceCode.text;
				try {
					const formatted = format(sourceCode, context.filename, context.options[0] || {});

					reportDifferences(context, sourceCode, formatted);
				}
				catch (error) {
					context.report({
						loc: {
							start: { line: 1, column: 0 },
							end: { line: 1, column: 0 },
						},
						message: `Failed to format the code: ${error}`,
					});
				}
			},
		};
	},
};

export default dprint;
