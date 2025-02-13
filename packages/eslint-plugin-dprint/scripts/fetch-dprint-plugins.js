import { createWriteStream } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { Readable } from 'node:stream';

const plugins = [
	'dprint-plugin-typescript',
	'dprint-plugin-markdown',
	'dprint-plugin-dockerfile',
	'g-plane/malva',
	'g-plane/markup_fmt',
	'g-plane/pretty_graphql',
];

const pluginInfoUrl = 'https://plugins.dprint.dev/info.json';
const schemaVersion = 4;
const pluginsDirectory = '../plugins';

const response = await fetch(pluginInfoUrl);
const data = await response.json();

if (data.schemaVersion !== schemaVersion) {
	throw new Error(`Expected schema version ${schemaVersion} but found ${data.schemaVersion}`);
}

const metaPath = new URL(`${pluginsDirectory}/meta.json`, import.meta.url);

let meta;
try {
	meta = JSON.parse(await readFile(metaPath));
}
catch {
	meta = {};
}

for (const name of plugins) {
	const { version, url, configKey, fileExtensions } = data.latest.find(plugin => plugin.name === name);

	if (meta[name]?.version === version) {
		console.log(`${name} is already up-to-date`);
		continue;
	}

	console.log(`Fetching ${url}...`);
	const response = await fetch(url);
	const pluginPath = new URL(`${pluginsDirectory}/${configKey}.wasm`, import.meta.url);
	const file = createWriteStream(pluginPath);
	Readable.fromWeb(response.body).pipe(file);

	meta[name] = {
		configKey,
		version,
		fileExtensions,
	};
}

await writeFile(metaPath, `${JSON.stringify(meta, undefined, '\t')}\n`);
