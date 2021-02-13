/**
 * We use a little bit of node in this file
 *
 * Entry --> output
 *
 * We set module.exports equal to an object that has all the 
 * configuration details for out webpack build
 */
const path = require('path');
// console.log(path.join(__dirname, 'public'));
module.exports = 
{
   // entry is the file that gets loaded and executed by default
   entry: "./src/app.js",
   // entry: "./src/app.js",
   output:
   {
      path: path.join(__dirname, 'public'),
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
			use:[
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
   },
	// devtool: 'cheap-module-eval-source-map' // this is used with webpack to find errors in the original files we're working on, not the
	devtool: 'eval-cheap-module-source-map',
	devServer: 
	{
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true // show index.html for all 404 errors
	}
}

