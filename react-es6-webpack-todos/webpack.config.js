var webpack = require('webpack');
var path = require('path');

module.exports = {
	//gives us line numbers in case of error debuging
	devtool: '_inline-source-map',

	//webpack will look into these files
	entry: [
		'webpack-dev-server/client?http://localhost:3000/',
		'webpack/hot/only-dev-server',
		'./src'
	],

	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'src'],
		extensions: ['', '.js']
	},
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']

		}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]

};