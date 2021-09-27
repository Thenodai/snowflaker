const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: ['node_modules', 'src'],
        alias: {
            '#config': path.resolve(__dirname, 'config'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader?cacheDirectory',
                },
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            inject: true,
            hash: false,
            template: './index.html',
            filename: 'index.html'
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 3001,
        disableHostCheck: true,
        stats: {
            assets: false,
            builtAt: false,
            cached: false,
            cachedAssets: false,
            children: false,
            chunks: false,
            chunkGroups: false,
            chunkModules: false,
            chunkOrigins: false,
            colors: true,
            errorDetails: false,
            modules: false,
            moduleTrace: false,
            publicPath: false,
            reasons: false,
            timings: false,
            warnings: false
        }
    }
};
