import type { Linter } from 'eslint';

export type LinterConfig = Omit<Linter.Config, 'plugins'> & {
	// Relax plugins type limitation, as most of the plugins do not have correct type info yet.
	/**
	 * An object containing a name-value mapping of plugin names to plugin objects.
	 * When files is specified, these plugins are only available to the matching files.
	 */
	plugins?: Record<string, any>;
};

export type FlatConfigItem = LinterConfig | LinterConfig[];
