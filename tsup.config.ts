import fs from 'node:fs/promises';
import path from 'node:path';
import { defineConfig } from 'tsup';
import pluginReplace from 'unplugin-replace/esbuild';

export default defineConfig({
	entry: {
		index: 'src/index.ts',
		worker: 'src/plugins/dprint/worker.ts',
	},
	format: 'esm',
	dts: 'src/index.ts',
	minify: true,
	esbuildPlugins: [
		pluginReplace(
			{
				include: 'src/plugins/dprint/rule.ts',
				values: { '__DEV__ = true': '__DEV__ = false' },
			},
		),
	],
	onSuccess: async () => {
		const promises: Promise<void>[] = [];

		for await (const entry of fs.glob('src/plugins/dprint/dprint-plugins/*.wasm')) {
			promises.push(fs.cp(entry, path.join('dist/dprint-plugins', path.basename(entry))));
		}

		await Promise.all(promises);
	},
});
