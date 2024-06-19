module.exports = {
	extends: ["airbnb", "plugin:react/recommended"],
	plugins: ["react", "react-native", "react-hooks", "jsx-a11y", "import"],
	parser: "@babel/eslint-parser",
	env: {
		jest: true,
		"react-native/react-native": true,
	},
	rules: {
		"no-unused-vars": 0,
		"no-undef": 0,
		"no-use-before-define": 0,
		"no-tabs": 0,
		"react/prop-types": 0,
		"comma-dangle": 0,
		"padded-blocks": 0,
		"arrow-body-style": 0,
		"object-curly-newline": 0,
		"react/jsx-filename-extension": 0,
		"react/react-in-jsx-scope": 0,
		"react/require-default-props": 0,
		"react/jsx-indent": 0,
		"react/jsx-indent-props": 0,
		"react/jsx-props-no-spreading": 1,
		"react-hooks/exhaustive-deps": 1,
		"react-native/no-color-literals": 1,
		"react-native/no-unused-styles": 2,
		"react-native/split-platform-components": 2,
		"react-native/no-inline-styles": 2,
		"react-native/no-raw-text": [2, { skip: ["ThemedText"] }],
		"react-native/no-single-element-style-arrays": 2,
		"react/function-component-definition": [2, { namedComponents: "arrow-function" }],
		"linebreak-style": [2, "windows"],
		"max-len": [
			2,
			{
				code: 110,
				ignoreComments: true,
			},
		],
		"import/extensions": [
			2,
			"ignorePackages",
			{
				ts: "never",
				tsx: "never",
			},
		],
		indent: [2, "tab"],
		quotes: [2, "double"],
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
	globals: {
		fetch: false,
	},
};
