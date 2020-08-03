const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

console.log('webpack mode', mode);

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  mode,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    hash: true,
    title:  'Typescript starter with webpack'
  })]
};

