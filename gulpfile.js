const   { watch, src, dest, parallel, series }      = require('gulp'),
        stylus                                      = require('gulp-stylus'),
        autoprefixer                                = require('autoprefixer-stylus'),
        jsImport                                    = require('gulp-js-import'),
        minify                                      = require('gulp-minify'),
        rename                                      = require("gulp-rename"),
        concat                                      = require('gulp-concat'),
        del                                         = require('del'),
        cleanCSS                                    = require('gulp-clean-css');


        
function clean() {
    // body omitted
    return del('build/**', {force:true});
}

function css() {
    return src('src/*.styl')
        .pipe( stylus({
            'include css': true,
            use: [autoprefixer('iOS >= 7', 'last 1 Chrome version')],
            compress: false,
            linenos: true
        }) )
        .pipe(rename( "style.css"))
        .pipe(dest('build/css'))
}

function cssMinify () {
    return src('build/**/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename( "style.min.css"))
        .pipe(dest('build/css'))
}

function js() {
    return src('src/*.js', { sourcemaps: true })
        .pipe(jsImport({ hideConsole: true }))
        .pipe(rename( "script.js"  ))
        .pipe(minify({
            ext:{
                src:'.js',
                min:'.min.js'
            }
        }))
        .pipe(dest('build/js', { sourcemaps: true }))
}


exports.js          = js;
exports.css         = css;
exports.cssMinify   = cssMinify;


exports.init = series(clean, css, js, cssMinify );
exports.default = function() {
    watch('src/**/*.styl', series( css, cssMinify ));
    watch('src/**/*.js', series( js ));
};