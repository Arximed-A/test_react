import js from "@eslint/js"
import tseslint from "typescript-eslint"
import react from "eslint-plugin-react";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";

export default tseslint.config(
	{ignores: ["dist"]},
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			reactPlugin.configs.flat.recommended,
			reactPlugin.configs.flat["jsx-runtime"],
		],
		settings: {
			react: {
				"version": "detect",
			}
		},
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,json}"],
		languageOptions: {
			...reactPlugin.configs.flat.recommended.languageOptions,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.serviceworker,
				...globals.browser,
			},
		},
		plugins: {
			react,
		},
		rules: {
			"react/jsx-uses-react": "error",
			"react/jsx-uses-vars": "error",
			"react/hook-use-state": ["error", { "allowDestructuredState": false }],
			//синтаксис
			quotes: ["error", "double", {"avoidEscape": true}],//кавычки
			"max-len": [
				"error",
				{
					code: 100,
					ignoreComments: true,
					ignoreTemplateLiterals: true,
					ignoreStrings: true,
				},
			],//длина строк
			indent: ["error", "tab"],//отступы
		},
	},
)
