import type { GlobalConfiguration } from '@dprint/formatter';

export interface RuleOptions {
	'dprint/dprint': [DprintOptions];
}

export interface DprintOptions extends GlobalConfiguration {
	languageOptions?: Record<string, unknown>;
}
