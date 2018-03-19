const webpack = require('webpack');
const path = require('path');

module.exports = {

	devtool:"source-map",

	entry: './src/index.js',

	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, 'dist')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ["react",'env']
				}
			}
		]
	},

	devServer:{
		contentBase:'./dist'
	}
};
