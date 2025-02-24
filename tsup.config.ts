import fs from 'node:fs/promises';
import path from 'node:path';
import { pluginReplace } from '@espcom/esbuild-plugin-replace';
import { defineConfig } from 'tsup';

export default defineConfig({
	entry: {
		index: 'src/index.ts',
		worker: 'src/plugins/dprint/worker.ts',
	},
	format: 'esm',
	dts: 'src/index.ts',
	minify: true,
	esbuildPlugins: [
		pluginReplace([
			{
				filter: /src\/plugins\/dprint\/rule\.ts$/,
				replace: '__DEV__ = true',
				replacer: () => '__DEV__ = false',
			},
		]),
	],
	onSuccess: async () => {
		const promises: Promise<void>[] = [];

		for await (const entry of fs.glob('src/plugins/dprint/dprint-plugins/*.wasm')) {
			promises.push(fs.cp(entry, path.join('dist/dprint-plugins', path.basename(entry))));
		}

		await Promise.all(promises);
	},
});
