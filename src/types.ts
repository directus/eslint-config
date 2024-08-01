import type { antfu, ConfigNames, TypedFlatConfigItem } from '@antfu/eslint-config';
import type { FlatConfigComposer } from 'eslint-flat-config-utils';

export type AntfuOptions = Parameters<typeof antfu>[0];

export type EslintConfig = Parameters<typeof antfu>[1];

export type EslintResult = FlatConfigComposer<TypedFlatConfigItem, ConfigNames>;

export interface DirectusOptions {
	/**
	 * Enable TypeScript support.
	 *
	 * @default true
	 */
	typescript?: boolean;

	/**
	 * Enable Vue support.
	 *
	 * @default false
	 */
	vue?: boolean;

	/**
	 * Additional ESLint config.
	 */
	eslintConfig?: EslintConfig;
}
