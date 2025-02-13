import { glob } from 'node:fs/promises';
import path from 'node:path';
import fs from 'fs-extra';
import { afterAll, beforeAll, it } from 'vitest';

beforeAll(async () => {
	await fs.rm('_fixtures', { recursive: true, force: true });
});
afterAll(async () => {
	await fs.rm('_fixtures', { recursive: true, force: true });
});

runWithConfig();

function runWithConfig() {
	it.concurrent('todo', async ({ expect }) => {
		const from = path.resolve('fixtures/input');
		const output = path.resolve('fixtures/output');
		const target = path.resolve('_fixtures');

		await fs.copy(from, target, {
			filter: (src) => {
				return !src.includes('node_modules');
			},
		});
		await fs.writeFile(path.join(target, 'eslint.config.js'), `
// @eslint-disable
import directusConfig from '@directus/eslint-config';

export default directusConfig;
  `);

		await execa('pnpm', ['eslint', '.', '--fix'], {
			cwd: target,
			stdio: 'pipe',
		});

		const files = await Array.fromAsync(glob('**/*', {
			exclude: [
				'node_modules',
				'eslint.config.js',
			],
			cwd: target,
		}));

		await Promise.all(files.map(async (file) => {
			const content = await fs.readFile(path.join(target, file), 'utf8');
			const source = await fs.readFile(path.join(from, file), 'utf8');
			const outputPath = path.join(output, file);
			if (content === source) {
				if (fs.existsSync(outputPath))
					await fs.remove(outputPath);
				return;
			}
			await expect.soft(content).toMatchFileSnapshot(path.join(output, file));
		}));
	}, 30_000);
}
