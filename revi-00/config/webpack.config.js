const path = require('path');

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
        }
      ]
    },
    devServer: {
      contentBase: APP_PUBLIC_DIR
    }
  };

  return props;
};

module.exports = env => {
  let level = "development";

  if (typeof env !== 'undefined') {
    level = env["NODE_ENV"];
  }

  return configs(level);
};
