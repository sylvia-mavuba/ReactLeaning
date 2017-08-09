const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// const styleLintOptions = {
//   configFile  : '.stylelintrc',
//   quiet       : false,
//   failOnError : true,
//   syntax      : 'scss',
// }


module.exports = function(env){

  const isProduction = env && env.production;
  const outputFilename = '[name].js';
  // const outputFilename = isProduction ? '[name].[chunkhash].js' : '[name].js';
  const outputDirectory = './public';

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({ name: 'app', name: 'libs' }),
    new ExtractTextPlugin('main.css'),
    // new ExtractTextPlugin(isProduction ? 'main.[chunkhash].css' : 'main.css'),
    // new HtmlWebpackPlugin({ template: 'views/tpl.html' }),
    //new StyleLintPlugin(styleLintOptions),
    //new CopyWebpackPlugin([{ from: 'src/images', to: 'images/' }])
  ];

  // if (isProduction) {
  //   plugins.push(new webpack.optimize.UglifyJsPlugin({
  //     beautify: false,
  //     mangle: {
  //       screw_ie8: true,
  //       keep_fnames: true
  //     },
  //     compress: {
  //       screw_ie8: true,
  //       warnings: false,
  //       drop_console: true
  //     },
  //     comments: false,
  //     sourceMap: false
  //   }))
  // }

  return {
    entry: {
      libs: ['react', 'react-dom', 'redux', 'react-redux', 'react-intl', 'moment', 'underscore', 'es6-promise-polyfill', 'axios'],
      app: './src/js/app/app.js',
    },
    output: {
      filename: outputFilename,
      path: path.join(__dirname, outputDirectory)
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: [
              { loader: 'css-loader' },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [ require('autoprefixer') ]
                }
              },
              { loader: 'sass-loader' },
            ]
          })
        },

        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: plugins
  }
}
