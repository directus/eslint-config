import type { Rule } from 'eslint'
import { messages, reportDifferences } from 'eslint-formatting-reporter'
import { createSyncFn } from 'synckit'
import { fileURLToPath } from 'node:url'

interface DprintOptions {
  language: string
  languageOptions?: Record<string, unknown>
  [x: string]: unknown
}

export type AsyncFormat = (code: string, filename: string, options: DprintOptions) => Promise<string>
type Format = (code: string, filename: string, options: DprintOptions) => string

let format: Format

export default {
  meta: {
    type: 'layout',
    docs: {
      description: 'Use dprint to format code',
			url: 'https://dprint.dev'
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
    if (!format)
      format = createSyncFn<AsyncFormat>(fileURLToPath(new URL('./worker.js', import.meta.url)), {
				tsRunner: DEV && 'tsx'
			})

    return {
      Program() {
        const sourceCode = context.sourceCode.text
        try {
          const formatted = format(sourceCode, context.filename, context.options[0] || {})

          reportDifferences(context, sourceCode, formatted)
        }
        catch (error) {
          context.report({
            loc: {
              start: { line: 1, column: 0 },
              end: { line: 1, column: 0 },
            },
            message: `Failed to format the code: ${error}`,
          })
        }
      },
    }
  },
} satisfies Rule.RuleModule

