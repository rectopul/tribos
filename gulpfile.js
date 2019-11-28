const   { watch, src, dest, parallel, series }      = require('gulp'),
        stylus                                      = require('gulp-stylus'),
        autoprefixer                                = require('autoprefixer-stylus'),
        jsImport                                    = require('gulp-js-import'),
        minify                                      = require('gulp-minify'),
        rename                                      = require("gulp-rename"),
        concat                                      = require('gulp-concat'),
        cleanCSS                                    = require('gulp-clean-css');

const gulp = require('gulp');  
const shell = require('gulp-shell')

function css() {
    return src('src/*.styl')
        .pipe( stylus({
            'include css': true,
            use: [autoprefixer('iOS >= 7', 'last 1 Chrome version')],
            compress: true,
            linenos: false
        }) )
        .pipe(rename( "app.min.css"))
        .pipe(dest('opencode/css'))
        .pipe(shell(['cd opencode && opencode upload css/app.min.css']))
}

function js() {
    return src('src/*.js', { sourcemaps: true })
        .pipe(jsImport({ hideConsole: true }))
        .pipe(rename( "app.js"  ))
        .pipe(minify({
            ext:{
                src:'.js',
                min:'.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(dest('opencode/js', { sourcemaps: true }))
}

 

exports.js          = js;
exports.css         = css;

exports.init = series(css, js);
exports.default = function() {
    watch('src/**/*.styl', series( css));
    watch('src/**/*.js', series( js ));
};

 