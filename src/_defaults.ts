const prettierOptions = {
	printWidth: 120,
	proseWrap: 'always',
	htmlWhitespaceSensitivity: 'ignore',
};

const eslintConfig = [
	{
		rules: {
			// Require parentheses around arrow function arguments
			'style/arrow-parens': 'error',

			// Require empty line between certain statements
			'style/padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',
					prev: [
						'block',
						'block-like',
						'cjs-export',
						'class',
						'multiline-block-like',
						'multiline-const',
						'multiline-expression',
						'multiline-let',
						'multiline-var',
					],
					next: '*',
				},
				{
					blankLine: 'always',
					prev: ['const', 'let'],
					next: [
						'block',
						'block-like',
						'cjs-export',
						'class',
					],
				},
				{
					blankLine: 'always',
					prev: '*',
					next: [
						'multiline-block-like',
						'multiline-const',
						'multiline-expression',
						'multiline-let',
						'multiline-var',
					],
				},
			],
		},
	},
	{
		files: ['**/*.vue'],
		rules: {
			// Require shorthand form attribute when v-bind value is true
			'vue/prefer-true-attribute-shorthand': 'error',

			// Allow unused variables when they begin with an underscore
			'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
		},
	},
	{
		files: ['*.test.ts'],
		rules: {
			// Allow multiple components in test files
			'vue/one-component-per-file': 'off',
		},
	},
];
