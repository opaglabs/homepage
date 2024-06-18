import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import globals from 'globals';
import js from '@eslint/js';
import parser from 'vue-eslint-parser';
import path from 'node:path';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import vue from 'eslint-plugin-vue';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    files: ["**/*.ts", "**/*.vue"]
  },
  {
    ignores: ['src/shims-vue.d.ts', 'node_modules/', 'dist/', '**/*.d.ts', '**/*.cjs'],
  },
  ...compat.extends(
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ),
  {
    plugins: {
      vue,
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: parser,
      ecmaVersion: 12,
      sourceType: 'module',

      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },

    rules: {
      'vue/no-v-html': 0,
      'vue/no-multiple-template-root': 0,
      'vue/multi-word-component-names': 0,
      'vue/no-v-for-template-key': 0,
      'vue/no-v-model-argument': 0,

      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: false,
        },
      ],
    },
  },
];
