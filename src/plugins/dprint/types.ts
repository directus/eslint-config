import type { GlobalConfiguration } from '@dprint/formatter';

export interface DprintOptions extends GlobalConfiguration {
	languageOptions?: Record<string, unknown>;
}

/** Async equivalent of a sync function */
type AsyncFunction<T extends (...arguments_: any[]) => any> = (...arguments_: Parameters<T>) => Promise<ReturnType<T>>;

export type Format = (code: string, filename: string, options: DprintOptions) => string;
export type AsyncFormat = AsyncFunction<Format>;
