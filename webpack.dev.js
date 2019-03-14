const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLTemplate = require('html-webpack-template');
const common = require('./webpack.common');

module.exports = merge(
    common,
    {
        mode: 'development',
        devtool: 'source-map',
        plugins: [
            new HTMLWebpackPlugin({
                inject: false,
                template: HTMLTemplate,
                title: 'webpack',
                appMountId: 'root'
            })
        ],
        devServer: {
            contentBase: path.resolve(__dirname, './dist'),
            port: 3001,
            hot: true,
            inline: true,
            compress: true,
            historyApiFallback: true
        }
    }
)