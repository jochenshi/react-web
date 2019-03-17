const merge = require('webpack-merge');
const common = require('./webpack.common');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLTemplate = require('html-webpack-template');

/*
*
* merge(common, {
        mode: 'production',
        target: 'node',
        entry: {
            index: './src/server.js'
        },
        output: {
            filename: 'server.[name].js',
            libraryTarget: 'umd'
        }
    }),*/

module.exports = [
    merge(common, {
        target: 'web',
        mode: 'production',
        plugins: [
            new HTMLWebpackPlugin({
                inject: false,
                template: HTMLTemplate,
                title: 'Home',
                appMountId: 'root',
                meta: [
                    {
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
                    }
                ],
                minify: true
            })
        ],
    })
];