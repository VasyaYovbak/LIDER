const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist/',
        publicPath: "",
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
            {
                test: /\.scss$/i,
                exclude: /(node_modules)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'styles.css'
    }), new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    })
    ],
};