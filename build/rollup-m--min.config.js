const uglify = require('rollup-plugin-uglify');
const postcss = require('rollup-plugin-postcss');
const cssnano = require('cssnano');

module.exports = {
    input: 'src/mdialog.js',
    name: 'Dialog',
    output: {
        file: 'dist/mdialog.min.js',
        format: 'umd'
    },
    plugins: [
        postcss({
            plugins: [cssnano()],
            extensions: ['.css']
        }),
        uglify()
    ]
};
