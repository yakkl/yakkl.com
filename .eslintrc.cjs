module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:svelte/recommended'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{
		 files: ['*.svelte'], 
		 processor: 'svelte3/svelte3',
		 rules: {
        'a11y-no-static-element-interactions': "off",  
        "a11y-click-events-have-key-events": "off",
				"a11y-missing-content-description": "off",
				'@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^\\$' }],
        // "no-unused-vars": "off",
      },
	}],
	settings: {
		'svelte3/typescript': () => require('typescript'),
		"svelte3/ignore-warnings": (warning) => warning.code === "a11y-missing-content-description"
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
