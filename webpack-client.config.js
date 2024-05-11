const path = require('path')
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
        '/client/init': `./lib/client/init.ts`,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, `./build`),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.EXTENSION_NAME': JSON.stringify(process.env.EXTENSION_NAME),
        }),
        new CopyPlugin({
            patterns: [
                {from: "./icons/", to: "./", toType: 'dir',},
                {from: "./manifest.json", to: "./manifest.json", toType: 'file'},
            ],
        }),
    ],
}
