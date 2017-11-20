const uglify = require('rollup-plugin-uglify');
const postcss = require('rollup-plugin-postcss');
const cssnano = require('cssnano');

module.exports = {
    input: 'src/dialog.js',
    name: 'Dialog',
    output: {
        file: 'dist/dialog.min.js',
        format: 'umd'
    },
    plugins: [
        postcss({
            plugins: [cssnano()],
            extensions: ['.css']
        }),
        uglify({
            // mangle: false,
            ie8: true
        })
    ]
};
