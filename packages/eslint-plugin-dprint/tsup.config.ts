import { pluginReplace } from '@espcom/esbuild-plugin-replace';
import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts', 'src/worker.ts'],
	format: 'esm',
	dts: true,
	minify: true,
	esbuildOptions(options) {
		options.plugins = [
			pluginReplace([
				{
					filter: /\.js$/,
					replace: '__DEV___ = true',
					replacer: () => '__DEV___ = false',
				},
			]),
		];
	},
});
