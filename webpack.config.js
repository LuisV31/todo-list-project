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
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg|webp)$/, // Add a rule for image files
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]', // Keep the original file name and extension
                            outputPath: 'images/', // Output images to an 'images' folder in the dist directory
                        },
                    },
                ],
            },
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    mode: 'development'
};
