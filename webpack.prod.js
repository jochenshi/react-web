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
            'react-router-dom': 'ReactRouterDOM',
            'antd': 'antd',
            'antd-mobile': 'antdMobile'
        },
        plugins: [
            new Visualizer(),
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
                minify: true,
                links: [
                    'https://cdnjs.cloudflare.com/ajax/libs/antd/3.15.1/antd.min.css'
                ],
                scripts: [
                    'https://unpkg.com/react@16/umd/react.production.min.js',
                    'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js',
                    'https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.0.0/react-router-dom.min.js',
                    'https://cdnjs.cloudflare.com/ajax/libs/antd/3.15.1/antd-with-locales.min.js',
                    'https://cdnjs.cloudflare.com/ajax/libs/antd-mobile/2.2.9/antd-mobile.min.js'
                ]
            })
        ],
    })
];
