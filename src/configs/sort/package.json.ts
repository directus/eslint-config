import type { FlatConfigItem } from '../../types.js';

export function sortPackageJson(): FlatConfigItem {
	/*
	* References:
	* - https://docs.npmjs.com/cli/configuring-npm/package-json
	* - https://pnpm.io/package_json
	*/

	return {
		name: 'directus/sort/package.json',
		files: ['**/package.json'],
		rules: {
			'jsonc/sort-keys': [
				'error',
				{
					order: [
						'name',
						'type',
						'version',
						'private',
						'packageManager',
						'description',
						'author',
						'contributors',
						'license',
						'funding',
						'homepage',
						'repository',
						'bugs',
						'keywords',
						'sideEffects',
						'exports',
						'main',
						'module',
						'types',
						'bin',
						'files',
						'engines',
						'scripts',
						'peerDependencies',
						'peerDependenciesMeta',
						'dependencies',
						'optionalDependencies',
						'devDependencies',
						'pnpm',
					],
					pathPattern: '^$',
				},
				{
					order: { type: 'asc' },
					pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$',
				},
				{
					order: { type: 'asc' },
					pathPattern: '^pnpm.overrides$',
				},
				{
					order: [
						'types',
						'import',
						'require',
						'default',
					],
					pathPattern: '^exports.*$',
				},
			],
			'jsonc/sort-array-values': [
				'error',
				{
					order: { type: 'asc' },
					pathPattern: '^files$',
				},
			],
		},
	};
}
