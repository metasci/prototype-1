const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const jquery = require('jquery');
        
const config = {
	// define an entry point
	entry: {
        'public-bundle': './app/webpack/public-entry.js', 
        'login-bundle': './app/webpack/login-entry.js', 
        'admin-bundle': './app/webpack/admin-entry.js'},

	//define output point
	output: {
		path: path.resolve(__dirname, 'public/dist'),
		filename: '[name].js'
	},

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '../images/[name].[ext]'
                    }
                }
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                use: {
                    loader: "file-loader",
                    options: {
                        name: '../css/fonts/[name].[ext]'
                    }
                }
            }
        ]
    },
	/*
     *plugins: [
     *            new webpack.ProvidePlugin({
     *                $: 'jquery',
     *                jQuery: 'jquery'
     *            })
     *        ]
	 */
}


module.exports = config; 

