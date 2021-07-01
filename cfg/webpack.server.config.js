const path = require('path');
const NodeExternal = require('webpack-node-externals');
const { EnvironmentPlugin } = require('webpack');

const NODE_ENV = process.env.NODE_ENV;
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css/;

module.exports = {
    target: 'node',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    mode: IS_PROD ? 'production' : 'development',
    entry: path.resolve(__dirname, '../src/server/server.ts'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js',
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName:
                                    '[name]__[local]--[hash:base64:5]',
                            },
                            onlyLocals: true,
                        },
                    },
                ],
                exclude: GLOBAL_CSS_REGEXP,
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ['css-loader'],
            },
        ],
    },
    externals: [NodeExternal()],
    optimization: {
        minimize: false,
    },
    plugins: [new EnvironmentPlugin(['CLIENT_ID'])],
};
