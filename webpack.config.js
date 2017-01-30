const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './index',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].bundle.js"
    },
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".js", ".reducer.js", ".action.js", ".smart.js", ".dumb.js"]
    },
    module: {
      preLoaders:[
        {
          test: /\.js$/,
          loader: 'eslint',
          include: [
            path.resolve(__dirname, 'app')
          ]
        }
      ],
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'stage-0', 'react'],
          }
        },
        {
          test: /\.css$/,
          loader: 'style!css'
        }
      ]
    }
};
