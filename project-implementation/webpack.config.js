var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// includes all libraries/packages/dependencies for the app (listed inder "dependencies" in package.json )
const VENDOR_LIBS = [
    'faker',
    'lodash',
    'react',
    'react-dom',
    'react-input-range',
    'react-redux',
    'react-router',
    'redux',
    'redux-form',
    'redux-thunk'
];

// making entry an object with keys now tells webpack that our app has multiple entries
// 'app' key refers to a bundle file with all the code that we manually wrote
// 'vendor' key refers to a bundle file with all the code provided by dependencies inside package.json

// the 'CommonsChunkPlugin' plugin is used to optimize code usage by getting rid of duplicate use of code throughout the app
// in our case, using the 'CommonsChunkPlugin' plugins will shrink the size of our app.bundle.js by getting rid of dependencies instantiations

// the 'HtmlWebpackPlugin' plugin automatically adds bundle files scripts inside our index.html file, without us manually adding them

// 'manifest' along with 'vendor' has been added inside the array inside 'CommonsChunkPlugin' is to restrict chunkhash from generating new hash every time when app.bundle.js has been changed

// add 'process.env.NODE_ENV' key with following value only when ready for production; adding it tells React to take it easy on heavy error checking since we are in production mode

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].[chunkhash].bundle.js'
    },
    module: {
      rules: [
          {
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
          },
          {
            use: ['style-loader', 'css-loader'],
            test: /\.css$/,
            exclude: /node_modules/
          }
      ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
