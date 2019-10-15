const   { watch, src, dest, parallel }      = require('gulp'),
        stylus                              = require('gulp-stylus'),
        autoprefixer                        = require('autoprefixer-stylus'),
        jsImport                            = require('gulp-js-import'),
        minify                              = require('gulp-minify'),
        rename                              = require("gulp-rename"),
        concat                              = require('gulp-concat'),
        cleanCSS                            = require('gulp-clean-css');


        
function clean(cb) {
    // body omitted
    cb();
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

function cssMin() {
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


exports.js = js;
exports.css = css;
exports.cssMin = cssMin;
exports.default = function() {
    // You can use a single task
    watch('src/**/*.styl', parallel(css, cssMin));
    // Or a composed task
    watch('src/**/*.js', parallel(clean, js));

    // watch('build/**/*.css', cssMin);
   
};