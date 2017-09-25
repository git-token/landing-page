const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-source-map',
  devServer: {
		host: '0.0.0.0',
		disableHostCheck: true,
		inline: true
	},
	entry: "./src/index.js",
  output: {
    path: path.join(__dirname, '/'),
    filename: 'gittoken-landing.dist.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }, {
        test : /.json?$/,
        loader : "json-loader"
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
    })
  ]
}
