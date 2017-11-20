const postcss = require('rollup-plugin-postcss');

module.exports = {
    input: 'src/mdialog.js',
    name: 'Dialog',
    output: {
        file: 'dist/mdialog.js',
        format: 'umd'
    },
    plugins: [
        postcss()
    ]
};
