import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/index'),
	output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js'
	},
	devServer: {
    contentBase: './buildScripts'
  },
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
