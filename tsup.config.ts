import { defineConfig } from 'tsup'

const env = process.env['NODE_ENV'];

export default defineConfig({
  entry: ['src/index.ts', 'src/rules/dprint/worker.ts'],
  esbuildOptions(options) {
	if (env === 'development' && options.define) {
    	options.define['DEV'] = 'true'
	}
  },
})
