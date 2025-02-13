import type { FlatConfigItem } from '../types.js';

export function sortPackageJson(): FlatConfigItem {
	/*
	* References:
	* - https://docs.npmjs.com/cli/configuring-npm/package-json
	* - https://pnpm.io/package_json
	*/

	return {
		name: 'directus/sort/package-json',
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

export function sortTsconfig(): FlatConfigItem {
	/*
	* References:
	* - https://www.typescriptlang.org/tsconfig/
	*/

	return {
		name: 'directus/sort/tsconfig-json',
		files: ['**/tsconfig.json', '**/tsconfig.*.json'],
		rules: {
			'jsonc/sort-keys': [
				'error',
				{
					order: [
						'extends',
						'compilerOptions',
						'references',
						'files',
						'include',
						'exclude',
					],
					pathPattern: '^$',
				},
				{
					order: [
						/* Projects */
						'incremental',
						'composite',
						'tsBuildInfoFile',
						'disableSourceOfProjectReferenceRedirect',
						'disableSolutionSearching',
						'disableReferencedProjectLoad',
						/* Language and Environment */
						'target',
						'jsx',
						'jsxFactory',
						'jsxFragmentFactory',
						'jsxImportSource',
						'lib',
						'moduleDetection',
						'noLib',
						'reactNamespace',
						'useDefineForClassFields',
						'emitDecoratorMetadata',
						'experimentalDecorators',
						/* Modules */
						'baseUrl',
						'rootDir',
						'rootDirs',
						'customConditions',
						'module',
						'moduleResolution',
						'moduleSuffixes',
						'noResolve',
						'paths',
						'resolveJsonModule',
						'resolvePackageJsonExports',
						'resolvePackageJsonImports',
						'typeRoots',
						'types',
						'allowArbitraryExtensions',
						'allowImportingTsExtensions',
						'allowUmdGlobalAccess',
						/* JavaScript Support */
						'allowJs',
						'checkJs',
						'maxNodeModuleJsDepth',
						/* Type Checking */
						'strict',
						'strictBindCallApply',
						'strictFunctionTypes',
						'strictNullChecks',
						'strictPropertyInitialization',
						'allowUnreachableCode',
						'allowUnusedLabels',
						'alwaysStrict',
						'exactOptionalPropertyTypes',
						'noFallthroughCasesInSwitch',
						'noImplicitAny',
						'noImplicitOverride',
						'noImplicitReturns',
						'noImplicitThis',
						'noPropertyAccessFromIndexSignature',
						'noUncheckedIndexedAccess',
						'noUnusedLocals',
						'noUnusedParameters',
						'useUnknownInCatchVariables',
						/* Emit */
						'declaration',
						'declarationDir',
						'declarationMap',
						'downlevelIteration',
						'emitBOM',
						'emitDeclarationOnly',
						'importHelpers',
						'importsNotUsedAsValues',
						'inlineSourceMap',
						'inlineSources',
						'mapRoot',
						'newLine',
						'noEmit',
						'noEmitHelpers',
						'noEmitOnError',
						'outDir',
						'outFile',
						'preserveConstEnums',
						'preserveValueImports',
						'removeComments',
						'sourceMap',
						'sourceRoot',
						'stripInternal',
						/* Interop Constraints */
						'allowSyntheticDefaultImports',
						'esModuleInterop',
						'forceConsistentCasingInFileNames',
						'isolatedDeclarations',
						'isolatedModules',
						'preserveSymlinks',
						'verbatimModuleSyntax',
						/* Completeness */
						'skipDefaultLibCheck',
						'skipLibCheck',
					],
					pathPattern: '^compilerOptions$',
				},
			],
		},
	};
}
