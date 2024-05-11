const path = require('path')
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        '/server/index': `./lib/server/index.ts`,
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
    ],
}
