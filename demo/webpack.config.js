const path = require('path');

module.exports = {
  entry: './src/webpack-npm-demo/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/webpack-npm-demo'),
    filename: 'bundle.js'
  }
  ,
  resolve: {
    extensions: ['.wasm', '.js', '.mjs',  '.json']
  }
};
