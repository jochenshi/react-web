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
                appMountId: 'root',
                meta: [
                    {
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
                    }
                ],
                scripts: [
                    'https://unpkg.com/react@16/umd/react.production.min.js',
                    'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js'
                ]
            })
        ],
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM'
        },
        devServer: {
            contentBase: path.resolve(__dirname, './dist'),
            host: '0.0.0.0',
            port: 3001,
            hot: true,
            inline: true,
            compress: true,
            historyApiFallback: true
        }
    }
)
