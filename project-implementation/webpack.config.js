var webpack = require('webpack');
var path = require('path');

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
module.exports = {
    entry: {
        app: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].bundle.js'
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
            name: 'vendor'
        })
    ]
};
