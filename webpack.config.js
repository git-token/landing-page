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
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime', 'transform-react-jsx'],
          presets: ['env', 'react', 'stage-0', 'es2015']
        }
      },{
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader'
        }
      },{
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
