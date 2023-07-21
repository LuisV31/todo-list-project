const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point of your app
    output: {
        filename: 'bundle.js', // Name of the output bundle
        path: path.resolve(__dirname, 'dist') // Directory where the bundle should be saved
    },
    mode: 'development'
};
