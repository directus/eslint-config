import type { Formatter } from '@dprint/formatter';
import type { AsyncFormat } from './types.js';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { createFromBuffer } from '@dprint/formatter';
import { runAsWorker } from 'synckit';
import meta from './dprint-plugins/meta.json' with { type: 'json' };

const cache = new Map<string, Formatter>();

const format: AsyncFormat = async (code, filename, options) => {
	const fileExtension = path.extname(filename).slice(1);

	let formatter = cache.get(fileExtension);

	if (!formatter) {
		const plugin = Object.values(meta).find((plugin) => plugin.fileExtensions.includes(fileExtension));

		if (!plugin)
			throw new Error(`${fileExtension} is not supported`);

		const filePath = new URL(`dprint-plugins/${plugin.configKey}.wasm`, import.meta.url);
		const buffer = await readFile(filePath);
		formatter = createFromBuffer(buffer);

		for (const extension of plugin.fileExtensions) {
			cache.set(extension, formatter);
		}
	}

	const { languageOptions = {}, ...globalOptions } = options;
	formatter.setConfig(globalOptions, languageOptions);
	return formatter.formatText({
		filePath: filename,
		fileText: code,
	});
};

runAsWorker(format);
