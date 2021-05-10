const webpack = require('webpack');
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const HMRServer = express();
const clientCompiler = webpack(webpackClientConfig);

HMRServer.use(
    webpackDevMiddleware(clientCompiler, {
        publicPath: webpackClientConfig.output.publicPath,
        stats: 'errors-only',
        serverSideRender: true,
        writeToDisk: true,
    }),
);

HMRServer.use(
    webpackHotMiddleware(clientCompiler, {
        path: '/static/__webpack_hmr',
    }),
);

HMRServer.listen(3001, () => {
    console.log('HMR server started successfully');
});

const serverCompiler = webpack(webpackServerConfig);

serverCompiler.run((err) => {
    if (err) {
        console.log('Compilation failed: ', err);
    }

    serverCompiler.watch({}, (err) => {
        if (err) {
            console.log('Compilation failed: ', err);
        }

        console.log('Compilation started successfully');
    });

    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/client'),
            path.resolve(__dirname, '../dist/server'),
        ],
    });
});
