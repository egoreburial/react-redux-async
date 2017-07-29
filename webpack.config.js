var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss () {
					return [autoprefixer, precss];
				}
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				include: [
					path.resolve(__dirname, "src"),
				],
			},
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'react-hot-loader'
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: ['transform-runtime']
					}
				}
			},
			{
				test:   /\.css$/,
				loader: "style-loader!css-loader!postcss-loader"
			}
		]
	}
}
