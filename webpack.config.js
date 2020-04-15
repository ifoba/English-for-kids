const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = (env, options) => {
    const isProduction = options.mode === 'production';

    const config = {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'none' : 'source-map',
        watch: !isProduction,
        entry: {
            main: './src/main.js',
            сards: './src/cards.js'
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].js'
        },
        
        module: {
            rules: [
                {
                    test: /\.?js$/,
                    exclude: /node_modules/,
                    use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                      }
                    }
                  }
            ]
        },
        plugins: [
            new CleanWebpackPlugin() 
        ]
    }
    return config;
};