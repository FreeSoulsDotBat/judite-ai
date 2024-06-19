module.exports = (api) => {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					root: ["."],
					alias: {
						components: "./components",
						app: "./app",
						constants: "./constants",
						hooks: "./hooks",
						config: "./config",
					},
				},
			],
		],
	};
};
