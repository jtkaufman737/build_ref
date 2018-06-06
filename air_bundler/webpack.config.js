const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var config = {
  module: {},
}

var stylesConfig = {
  entry: [
     '../../cumulus-air-manager/air_manager/dashboard/static/dashboard/css/dashboard.css',
     './node_modules/vuetify/dist/vuetify.css',
  ],
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    })
  ],
  output: {
    filename: '[name].bundle.css',
    chunkFilename: '[name].bundle.css',
    path: path.resolve(__dirname, '../../cumulus-air-manager/air_manager/dashboard/static/dashboard/css/')
  },
  module: {
     rules: [ // Regex grabbing files it wasn't playing nicely with
       {
         test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
          ]
       }, // images
       {
         test: /.*\.(gif|png|jpe?g)$/i,
         use: [
           {
             loader:'file-loader'
           }
         ]
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       }
     ]
   },
};


var jsConfig = {
  entry: [
     './src/index.js',
     './node_modules/vue/dist/vue.runtime.common.js',
     './node_modules/vuetify/dist/vuetify.min.js'
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, '../../cumulus-air-manager/air_manager/dashboard/static/dashboard/javascripts/')
  },
  module: {
     rules: [ // Regex grabbing files it wasn't playing nicely with
       {
         test: /\.js$/,
         exclude: /(node_modules)/,
         use: {
           loader: 'babel-loader',
         }
       },
     ]
   },
};

module.exports = [ jsConfig, stylesConfig ]
