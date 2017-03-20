const path = require('path');

// 'entry' value is a relative path to index.js
// it is required for output to have the 2 keys, path and filename
// output's 'path' value is an absolute path to bundle.js

// loaders
// babel rule:
        // 'babel-loader' - teaches babel how to deal with webpack build system
        // 'babel-core' - takes in a input file to traform and outputs another, however does not actually transform it
        // 'babel-preset-env' - the actual brains and ruleset for transforming es6 code to es5
// CSS rule
        // 'css-loader' - knows how to deal with CSS file imports
        // 'style-loader' - executes the imported CSS into the HTML content

const webpackConfig = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
    }
}

module.exports = webpackConfig;
