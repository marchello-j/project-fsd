// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime',
		'plugin:i18next/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
	rules: {
		indent: ['off', 2],
		'linebreak-style': 0,
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/no-set-state': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		'i18next/no-literal-string': [
			'error',
			{
				markupOnly: true,
				ignoreAttribute: ['data-testid', 'to'],
			},
		],
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'no-param-reassigh': 'off',
	},
	globals: {
		__IS_DEV__: true,
	},
	overrides: [
		{
			files: ['**/src/**/*.test.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
			},
		},
	],
};
