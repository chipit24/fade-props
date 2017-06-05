const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const TARGET = process.env.npm_lifecycle_event;

let config = {};
let common_config = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'demo/js'),
    publicPath: '/js/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};

switch (TARGET) {
  case 'build':
    config = merge(common_config, {
      target: 'node',
      externals: [nodeExternals()],
      entry: path.join(__dirname, 'src/fade-props.js'),
      output: {
        filename: 'index.js',
        path: path.join(__dirname, '/'),
        library: "FadeProps",
        libraryTarget: "umd"
      }
    });
    break;
    
  case 'start':
    config = merge(common_config, {
      devServer: {
        contentBase: path.join(__dirname, 'demo')
      },
      devtool: 'source-map'
    });
    break;
    
  default:
    config = common_config;
}

module.exports = config;
