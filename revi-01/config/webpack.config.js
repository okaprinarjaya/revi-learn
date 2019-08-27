const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const ROOT_APP_DIR = path.resolve(__dirname, '../');
const APP_PUBLIC_DIR = ROOT_APP_DIR + '/public';

const configs = level => {
  let props = {
    entry: ROOT_APP_DIR + '/src/index.js',
    output: {
      filename: 'jancuk.bundle.js',
      path: APP_PUBLIC_DIR
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(scss|css)$/,
          use: [
            level === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    devServer: {
      contentBase: APP_PUBLIC_DIR
    }
  };

  if (level === 'production') {
    props = {
      ...props,
      plugins: [
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsPlugin()
      ],
      optimization: {
        minimizer: [new UglifyJsPlugin()]
      }
    }
  }

  return props;
};

module.exports = env => {
  let level = "development";

  if (typeof env !== 'undefined') {
    level = env["NODE_ENV"];
  }

  return configs(level);
};
