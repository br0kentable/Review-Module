const path = require('path');

module.exports = {
  mode: 'development',
  entry: __dirname + '/client/src/components/Index.jsx',
  output: {
    path: path.resolve(__dirname,  'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
};