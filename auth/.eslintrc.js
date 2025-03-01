module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module'
	},
	plugins: ['eslint-plugin-prefer-arrow', 'eslint-plugin-import', 'eslint-plugin-jsdoc', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/await-thenable': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/ban-types': [
			'error',
			{
				types: {
					Object: {
						message: 'Avoid using the `Object` type. Did you mean `object`?'
					},
					Function: {
						message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
					},
					Boolean: {
						message: 'Avoid using the `Boolean` type. Did you mean `boolean`?'
					},
					Number: {
						message: 'Avoid using the `Number` type. Did you mean `number`?'
					},
					String: {
						message: 'Avoid using the `String` type. Did you mean `string`?'
					},
					Symbol: {
						message: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
					}
				}
			}
		],
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/dot-notation': 'error',
		'@typescript-eslint/require-await': 'off',
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false
				}
			}
		],
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-redeclare': 'error',
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
				leadingUnderscore: 'allow',
				trailingUnderscore: 'allow'
			}
		],
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/prefer-readonly': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				allowTemplateLiterals: true
			}
		],
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/semi': ['error', 'always'],
		'@typescript-eslint/triple-slash-reference': [
			'error',
			{
				path: 'always',
				types: 'prefer-import',
				lib: 'always'
			}
		],
		'@typescript-eslint/unified-signatures': 'error',
		'arrow-body-style': 'error',
		'arrow-parens': ['off', 'always'],
		'brace-style': ['off', 'off'],
		'capitalized-comments': 'off',
		'comma-dangle': 'off',
		complexity: 'off',
		'constructor-super': 'error',
		curly: ['error', 'multi-line'],
		'eol-last': 'off',
		eqeqeq: ['error', 'always'],
		'guard-for-in': 'error',
		'id-blacklist': 'error',
		'id-match': 'error',
		'import/no-default-export': 'error',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: false
			}
		],
		'import/no-unassigned-import': 'error',
		'import/order': 'error',
		'jsdoc/check-alignment': 'error',
		'jsdoc/check-indentation': 'error',
		'jsdoc/newline-after-description': 'error',
		'max-classes-per-file': ['error', 1],
		'max-len': [
			'error',
			{
				code: 180
			}
		],
		'new-parens': 'error',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-cond-assign': 'off',
		'no-console': 'error',
		'no-debugger': 'error',
		'no-empty': 'error',
		'no-eval': 'error',
		'no-fallthrough': 'off',
		'no-invalid-this': 'error',
		'no-magic-numbers': 'off',
		'no-multiple-empty-lines': 'error',
		'no-new-wrappers': 'error',
		'no-return-await': 'error',
		'no-sequences': 'error',
		'no-shadow': 'off',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		'no-underscore-dangle': 'error',
		'no-unsafe-finally': 'error',
		'no-unused-labels': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'one-var': ['off', 'never'],
		'prefer-arrow/prefer-arrow-functions': 'off',
		'prefer-const': 'error',
		'prefer-template': 'error',
		radix: 'error',
		'spaced-comment': [
			'error',
			'always',
			{
				markers: ['/']
			}
		],
		'use-isnan': 'error',
		'valid-typeof': 'off',
	}
};
