const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 'entry' value is a relative path to index.js
// it is required for output to have the 2 keys, path and filename
// output's 'path' value is an absolute path to bundle.js

// loaders
    // babel rule:
            // 'babel-loader' - teaches babel how to deal with webpack build system
            // 'babel-core' - takes in a input file to traform and outputs another, however does not actually transform it
            // 'babel-preset-env' - the actual brains and ruleset for transforming es6 code to es5

    // CSS rule:
            // 'css-loader' - knows how to deal with CSS file imports
            // 'style-loader' - executes the imported CSS into the HTML content

    // ExtractTextPlugin - mainly used to extract and split portions of bundled code into different files
    // Image rule:
            // 'image-webpack-loader' - for compressing any size of image, so it would be better in terms of load time in the browser
            // 'url-loader' - distinct between different sizes of images and in charge of placing image in the bundle(for smaller images) or perhaps in a different output directory(for larger images)
            // for 'url-loader', the limit property inside options refer to the following - only include images inside the bundle file if the size is 40,000 bytes or less

// publicPath - links import statements to refer to files inside the 'dist' directory


const webpackConfig = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                   use: 'css-loader'
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 40000
                        }
                    },
                    'image-webpack-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.bundle.css')
    ]
}

module.exports = webpackConfig;
