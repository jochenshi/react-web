const merge = require('webpack-merge');
const common = require('./webpack.common');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLTemplate = require('html-webpack-template');
const Visualizer = require('webpack-visualizer-plugin');

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
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
            'react-router-dom': 'ReactRouterDOM'
        },
        plugins: [
            new Visualizer(),
            new HTMLWebpackPlugin({
                inject: false,
                template: HTMLTemplate,
                title: 'Home',
                appMountId: 'root',
                favicon: './src/assets/favicon.ico',
                meta: [
                    {
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
                    }
                ],
                minify: true,
                scripts: [
                    'https://unpkg.com/react@16/umd/react.production.min.js',
                    'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js',
                    'https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/4.3.1/react-router-dom.min.js'
                ]
            })
        ],
    })
];
