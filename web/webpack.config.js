const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootDir = path.join(__dirname, '..');
const webpackEnv = process.env.NODE_ENV || 'development';

module.exports = {
  mode: webpackEnv,
  entry: {
    app: path.join(rootDir, './index.web.ts'),
  },
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: 'app-[hash].bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      // {
      //   test: /\.(tsx|ts|jsx|js|mjs|ttf)$/,
      //   exclude: /node_modules/,
      //   loader: 'ts-loader',
      // },
      // {test: /\.png$/, use: 'raw-loader'},
      {
        test: /\.(tsx|ts|mjs)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },

      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            esModule: false,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
    }),
    //============
    new webpack.IgnorePlugin({
      resourceRegExp: /react-native-document-picker/,
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /react-native-blob-util/,
    }),
    //=====================================
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin({
      resourceRegExp: /react-native-pdf/,
    }),
  ],
  resolve: {
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.jsx',
      '.web.js',
      '.jsx',
      '.js',
    ], // read files in fillowing order
    alias: {
      'react-native$': 'react-native-web',
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@screens': path.resolve(__dirname, '../src/screens'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@src': path.resolve(__dirname, '../src'),
      '@utils': path.resolve(__dirname, '../utils'),
    },
  },
};
