/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
  // parser: '',
  // plugins: [''],
  ignorePatterns: ['/*.js'],
  root: true,
  rules: {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'space-infix-ops': 'error',
    'object-curly-spacing': ['error', 'never'],
    'keyword-spacing': 'error',
    'space-before-function-paren': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'arrow-spacing': 'error',
    'eol-last': ['error', 'always'],
    'react/prop-types': 'off',
  },
  env: {
    'es2020': true,
    'browser': true,

  },
  parserOptions: {
    'sourceType': 'module',
    'ecmaVersion': 2020,
  },
  settings: {
    'react': {
      'version': 'detect'
    }
  }
}
