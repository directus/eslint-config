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

/**
 * Rename plugin prefixes in a rule object.
 * Accepts a map of prefixes to rename.
 *
 * @example
 * ```ts
 * rules: renameRules(
 *   {
 *     '@typescript-eslint/indent': 'error'
 *   },
 *   { '@typescript-eslint': 'ts' }
 * )
 * ```
 */
export function renameRules(
	rules: Record<string, any>,
	map: Record<string, string>,
): Record<string, any> {
	return Object.fromEntries(
		Object.entries(rules)
			.map(([key, value]) => {
				for (const [from, to] of Object.entries(map)) {
					if (key.startsWith(`${from}/`))
						return [to + key.slice(from.length), value];
				}
				return [key, value];
			}),
	);
}
