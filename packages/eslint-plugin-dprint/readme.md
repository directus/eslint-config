# @directus/eslint-plugin-dprint

ESLint plugin to format code with [dprint](https://dprint.dev).

## Installation

```shell
pnpm add -D eslint eslint-parser-plain @directus/eslint-plugin-format
```

## Usage

Example `eslint.config.js` config for formatting CSS files:

```js
import * as parserPlain from 'eslint-parser-plain';
import pluginDprint from '@directus/eslint-plugin-dprint';

export default [
    {
		files: ['**/*.css'],
		plugins: {
			dprint: pluginDprint
		},
		languageOptions: {
			parser: parserPlain,
		},
		rules: {
			'dprint/dprint': ['error', { useTabs: true }],
		},
	},
];
```

## Additional Resources

- [Directus Website](https://directus.io)
- [Directus GitHub Repository](https://github.com/directus/directus)
