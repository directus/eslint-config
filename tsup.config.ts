import { pluginReplace } from '@espcom/esbuild-plugin-replace';
import cP from '@sprout2000/esbuild-copy-plugin';
import { defineConfig } from 'tsup';

const { copyPlugin: pluginCopy } = cP;

export default defineConfig({
	entry: ['src/index.ts', 'src/plugins/dprint/worker.ts'],
	format: 'esm',
	dts: true,
	minify: true,
	esbuildOptions(options) {
		options.plugins = [
			pluginReplace([
				{
					filter: /src\/plugins\/dprint\/rule\.js$/,
					replace: '__DEV___ = true',
					replacer: () => '__DEV___ = false',
				},
			]),
			pluginCopy({
				src: 'src/plugins/dprint/dprint-plugins',
				dest: 'dist',
			},
			),
		];
	},
});
