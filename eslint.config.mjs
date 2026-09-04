import {defineConfig, globalIgnores} from 'eslint/config';
import nextPlugin from 'eslint-config-next';
import stylistic from '@stylistic/eslint-plugin';

/** @type {import('eslint').Linter.Config.RulesRecord} */
const globalRules = {
  '@stylistic/indent': ['error', 2],
  '@stylistic/quotes': ['error', 'single'],
  '@stylistic/semi': ['error', 'always'],
  '@stylistic/space-infix-ops': 'error',
  '@stylistic/keyword-spacing': 'error',
  '@stylistic/eol-last': 'error',

  '@stylistic/comma-dangle': ['error', {
    arrays: 'never',
    objects: 'only-multiline',
    imports: 'never',
    exports: 'never',
    functions: 'never',
  }],

  '@stylistic/object-curly-spacing': 'error',
  '@stylistic/space-before-function-paren': ['error', 'always'],
  '@stylistic/space-before-blocks': ['error', 'always'],
  '@stylistic/arrow-spacing': 'error',
};

export default defineConfig([
  nextPlugin,
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      next: nextPlugin,
      '@stylistic': stylistic,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...globalRules,
    },
  },
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);
