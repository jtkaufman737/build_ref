var path = require('path')
var webpack = require('webpack')
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

var config = {
  module: {},
}


var stylesConfig = {
  entry: [
     '../../cumulus-air-manager/air_manager/dashboard/src/css/dashboard.css',
     '../../cumulus-air-manager/air_manager/dashboard/src/images/logo.png',
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
    // chunkFilename: '[name].bundle.css', for some reason looks like this was causing weird behavior - a js file ??? Look into later 
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
//
// var vueConfig = {
//   entry: './src/main.js',
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     publicPath: '/dist/',
//     filename: 'build.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           'vue-style-loader',
//           'css-loader'
//         ],
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           'vue-style-loader',
//           'css-loader',
//           'sass-loader'
//         ],
//       },
//       {
//         test: /\.sass$/,
//         use: [
//           'vue-style-loader',
//           'css-loader',
//           'sass-loader?indentedSyntax'
//         ],
//       },
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//         options: {
//           loaders: {
//             // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
//             // the "scss" and "sass" values for the lang attribute to the right configs here.
//             // other preprocessors should work out of the box, no loader config like this necessary.
//             'scss': [
//               'vue-style-loader',
//               'css-loader',
//               'sass-loader'
//             ],
//             'sass': [
//               'vue-style-loader',
//               'css-loader',
//               'sass-loader?indentedSyntax'
//             ]
//           }
//           // other vue-loader options go here
//         }
//       },
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.(png|jpg|gif|svg)$/,
//         loader: 'file-loader',
//         options: {
//           name: '[name].[ext]?[hash]'
//         }
//       }
//     ]
//   },
//   resolve: {
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js'
//     },
//     extensions: ['*', '.js', '.vue', '.json']
//   },
//   devServer: {
//     historyApiFallback: true,
//     noInfo: true,
//     overlay: true
//   },
//   performance: {
//     hints: false
//   },
//   devtool: '#eval-source-map'
// }
//
// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }

module.exports = [ jsConfig, stylesConfig ]
