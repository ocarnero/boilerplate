import path from 'path';
import webpack from 'webpack';

export default {
	devtool: 'source-map',
	mode: 'development',
  entry: path.resolve(__dirname, 'src/index'),
	output: {
		path: path.resolve(__dirname, 'src'),
		//publicPatch: '/',
    filename: 'bundle.js'
	},
	target: "web",
	devServer: {
    contentBase: './buildScripts'
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			debug: true
		})
	],
  module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
        test: /\.css$/,
				use: [{ 
					loader: 'style-loader'
				}, {
					loader: 'css-loader',
					options: {
						modules: true
					}
				}]
			}
		],
  }
}
