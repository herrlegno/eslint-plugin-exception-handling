import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import {plugin as exceptionHandling} from 'eslint-plugin-exception-handling'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.strictTypeChecked],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "exception-handling": exceptionHandling,
    },
    rules: {
      "exception-handling/might-throw": "warn",
      "exception-handling/no-unhandled": "error",
    },
  },
)
