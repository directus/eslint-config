import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin';
import type { Linter } from 'eslint';
import type { ResolvableFlatConfig } from 'eslint-flat-config-utils';

export type StylisticConfig = Pick<StylisticCustomizeOptions, 'indent' | 'quotes' | 'semi'>;

export type LinterConfig = Omit<Linter.Config, 'plugins'> & {
	// Relax plugins type limitation, as most of the plugins do not have correct type info yet.
	/**
	 * An object containing a name-value mapping of plugin names to plugin objects.
	 * When files is specified, these plugins are only available to the matching files.
	 */
	plugins?: Record<string, any>;
};

export type FlatConfigItem = ResolvableFlatConfig<LinterConfig>;
