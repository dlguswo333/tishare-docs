import {defineConfig, globalIgnores} from 'eslint/config';
import nextPlugin from 'eslint-config-next';

/** @type {import('eslint').Linter.Config.RulesRecord} */
const globalRules = {
  indent: ['error', 2],
  quotes: ['error', 'single'],
  semi: ['error', 'always'],
  'space-infix-ops': 'error',
  'keyword-spacing': 'error',
  'eol-last': 'error',

  'comma-dangle': ['error', {
    arrays: 'never',
    objects: 'only-multiline',
    imports: 'never',
    exports: 'never',
    functions: 'never',
  }],

  'object-curly-spacing': 'error',
  'space-before-function-paren': ['error', 'always'],
  'space-before-blocks': ['error', 'always'],
  'arrow-spacing': 'error',
};

export default defineConfig([
  nextPlugin,
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      next: nextPlugin,
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
