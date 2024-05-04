const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  optimization:{},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ttf$/,
        use: ['file-loader'],
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MonacoWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      filename: path.resolve(
        __dirname,
        'dist',
        'index.html',
      ),
      scriptLoading: 'defer',
    })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.vue',],
    alias: {
      vue$: 'vue/dist/vue.common.js',
      'vue-async-computed': 'vue-async-computed/dist/vue-async-computed.js',
    },
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 9000,
  },
}