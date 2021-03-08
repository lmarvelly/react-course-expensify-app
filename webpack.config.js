/**
 * We use a little bit of node in this file.
 * Node doesn't use import so we use require.
 *
 * Entry --> output
 *
 * We set module.exports equal to an object that has all the 
 * configuration details for out webpack build
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test')
{
	require('dotenv').config({ path: '.env.test' })
}
else if (process.env.NODE_ENV === 'development')
{
	require('dotenv').config({ path: '.env.development' })
}

module.exports = (env) =>
{
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');

	console.log('env', env)
	return {
		// entry is the file that gets loaded and executed by default
		entry: "./src/app.js",
		output:
		{
			path: path.join(__dirname, 'public', 'dist'),
			filename: "bundle.js" // "bundle.js" is a very common name for a file pack
		},
		// the loader essentially teaches Webpack how to run Babel
		module:
		{
			rules: 
			[{
				loader: 'babel-loader',
				// checking for JavaScript files
				test: /\.js$/,
				// ignore all node_modules. We don't want to run babel through all these files as there already ready for production
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/, // everytime webpack finds a CSS or SCSS fill, it dumps it into the DOM in a style tag <style>
				use: CSSExtract.extract({
					use: [
						{
							loader: 'css-loader',
							options: 
							{
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options:
							{
								sourceMap: true
							}
						}
					]
				})
			}]
		},
		plugins: [
			CSSExtract,
			// passing down the firebase down to into clientside javascript
			new webpack.DefinePlugin(
			{
				'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
				'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
				'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
				'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
				'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
				'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
				'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
				'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
			})
		],
		// devtool: 'cheap-module-eval-source-map' // this is used with webpack to find errors in the original files we're working on, not the
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: 
		{
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true, // show index.html for all 404 errors
			publicPath: '/dist/'
		}
	};
};

