const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const validate = require('webpack-validator');
const TARGET = process.env.npm_lifecycle_event;

let config = {};
let common_config = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'demo/js'),
    publicPath: '/js/'
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|\.c9)/,
      loader: 'babel'
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
      cache: true,
      debug: true,
      devtool: 'source-map'
    });
    break;
    
  default:
    config = common_config;
}

module.exports = validate(config);
