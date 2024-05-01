const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Entry point of your app
    output: {
        filename: 'bundle.js', // Name of the output bundle
        path: path.resolve(__dirname, 'dist') // Directory where the bundle should be saved
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Todo App',
            template: 'src/index.html'
        })
    ],
    mode: 'development'
};
