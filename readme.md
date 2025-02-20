# Directus ESLint Config

Opinionated ESLint config used by the projects in the Directus ecosystem.

## Installation

```shell
pnpm add -D eslint @directus/eslint-config
```

## Usage

Create an [ESLint config file](https://eslint.org/docs/latest/use/configure/configuration-files) with the following
content:

_Minimal_

```js
export { default } from '@directus/eslint-config';
```

_With additional config_

```js
import directusConfig from '@directus/eslint-config';

export default [
	...directusConfig,
	// Additional config
];
```

## Credits

This config is heavily inspired by and partially based on Anthony's ESLint config preset ❤️\
If you're looking for an ESLint config preset outside of the Directus ecosystem, check it out at
https://github.com/antfu/eslint-config.

## Additional Resources

- [Directus Website](https://directus.io)
- [Directus GitHub Repository](https://github.com/directus/directus)
