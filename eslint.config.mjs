import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules/**', 'playwright-report/**', 'test-results/**', 'dist/**', '**/*.ts']
  },

  js.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs}'],

    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },

  eslintConfigPrettier
];
