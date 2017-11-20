const postcss = require('rollup-plugin-postcss');

module.exports = {
    input: 'src/dialog.js',
    name: 'Dialog',
    output: {
        file: 'dist/dialog.js',
        format: 'umd'
    },
    plugins: [
        postcss()
    ]
};
