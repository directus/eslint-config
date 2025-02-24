import fs from 'node:fs/promises';
import path from 'node:path';
import { execa } from 'execa';
import { afterAll, beforeAll, it } from 'vitest';

const from = path.resolve('fixtures/input');
const output = path.resolve('fixtures/output');
const target = path.resolve('_fixtures');

beforeAll(async () => {
	await fs.rm('_fixtures', { recursive: true, force: true });

	await fs.cp(from, target, { recursive: true });

	await execa('pnpm', ['eslint', '--no-ignore', target, '--fix', target], {
		stdio: 'pipe',
	});
});

afterAll(async () => {
	await fs.rm('_fixtures', { recursive: true, force: true });
});

const files = await getFileList();

it.concurrent.for(files)('%s', async (file, { expect }) => {
	const content = await fs.readFile(path.join(target, file), 'utf8');
	const source = await fs.readFile(path.join(from, file), 'utf8');

	if (content === source) {
		const outputPath = path.join(output, file);
		fs.unlink(outputPath).catch(() => {});
		return;
	}

	await expect.soft(content).toMatchFileSnapshot(path.join(output, file));
});

async function getFileList() {
	const files: string[] = [];

	for await (const entry of fs.glob('**/*', {
		cwd: from,
		withFileTypes: true,
	})) {
		if (entry.isFile())
			files.push(path.join(path.relative(from, entry.parentPath), entry.name));
	}

	return files;
}
