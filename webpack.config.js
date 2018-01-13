const path = require('path');

module.exports = {
	// define an entry point
	entry: './app/webpack/entry.js',

	//define output point
	output: {
		path: path.resolve(__dirname, 'public/dist'),
		filename: 'bundle.js'
	},

	module: {
		loaders: [
		    {
		        test: /\.js$/,
		        exclude: /(node_modules)/,
		        loader: 'babel-loader',
		        query: {
				presets: ['es2015']
		            }
		    },
		    {
			test: /\.css$/,
			loader: "style-loader!css-loader"
		    },
		    {
			test: /\.(png|svg|jpg|gif)$/,
			loaders: "file-loader"
		    }
		]
	}
}
