const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = (env, argv) => {
	const isProduction = argv.mode === 'production'

	const config = {
		entry: './src/index.jsx',
		output: {
			filename: 'bundle.js',
		},
		module: {
			rules: [
				{
					test: /.(js|jsx?)$/,
					use: ['babel-loader'],
				},
				{
					test: /.s?css$/,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader',
						'sass-loader',
					],
				},
				{
					test: /.(jpg|png)$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 8192,
								name: '[path][name].[ext]',
								outputPath: 'images',
							},
						},
					],
				},
			],
		},
		plugins: [
			new webpack.ProgressPlugin(),
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: './src/index.html',
			}),
		],
		devServer: {
			hot: true,
			port: 9007,
			historyApiFallback: true,
		},
	}

	if (isProduction) {
		config.plugins.push(
			new MiniCssExtractPlugin({
				filename: '[name].css',
			})
		)
	}

	return config
}
