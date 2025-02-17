import type { Linter } from 'eslint';
import process from 'node:process';

export function isInEditorEnv(): boolean {
	if (process.env['CI'])
		return false;
	if (isInGitHooks())
		return false;
	return !!(
		process.env['VSCODE_PID']
		|| process.env['VSCODE_CWD']
		|| process.env['JETBRAINS_IDE']
		|| process.env['VIM']
		|| process.env['NVIM']
	);
}

function isInGitHooks(): boolean {
	return !!(
		process.env['GIT_PARAMS']
		|| process.env['VSCODE_GIT_COMMAND']
	);
}

type Undefinable<T> = {
	[P in keyof T]: T[P] | undefined;
};

/**
 * Extract all rules from a flat config array.
 */
export function extractRules<T extends Undefinable<Linter.Config>[] = Linter.Config[]>(config: T): T[number]['rules'] extends undefined ? Linter.RulesRecord : T[number]['rules'] {
	const rules = {};

	for (const entry of config) {
		Object.assign(rules, entry.rules);
	}

	return rules;
}
