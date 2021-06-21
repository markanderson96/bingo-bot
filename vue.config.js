module.exports = {
	devServer: {
		https: false
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: '@import "@/assets/styles/styles.scss";'
			}
		}
	}
};