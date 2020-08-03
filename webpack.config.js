const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production';
const mode = isProd ? 'production' : 'development';

console.log('webpack mode', mode);
const config = {
  entry: './src/index.ts',
  ...(isProd ? {} : { devtool: 'inline-source-map' }),
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
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title:  'Typescript starter with webpack'
    })
  ]
};

// console.log('config', JSON.stringify(config, null, 2))

module.exports = config;

