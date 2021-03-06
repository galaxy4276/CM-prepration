const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader']
      },
      {
      }
    ]
  },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};