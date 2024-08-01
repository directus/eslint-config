# Directus ESLint Config

Shared ESLint config used by the projects in the Directus ecosystem.

Based on https://github.com/antfu/eslint-config ❤️

## Installation

```shell
pnpm add-D eslint @directus/eslint-config
```

## Usage

Create `eslint.config.js` in the project root with the following content:

```js
import directusConfig from '@directus/eslint-config';

export default directusConfig();
```

## Additional Resources

- [Directus Website](https://directus.io)
- [Directus GitHub Repository](https://github.com/directus/directus)
