var { watch, src, dest, parallel, series } = require("gulp"),
    stylus = require("gulp-stylus"),
    autoprefixer = require("autoprefixer-stylus"),
    jsImport = require("gulp-js-import"),
    minify = require("gulp-minify"),
    rename = require("gulp-rename"),
    concat = require("gulp-concat"),
    cleanCSS = require("gulp-clean-css");

const browserSync = require("browser-sync");

const reload = browserSync.reload;

const server = browserSync.create();

function css() {
    return src("src/**/*.styl")
        .pipe(
            stylus({
                "include css": true,
                use: [autoprefixer("iOS >= 7", "last 1 Chrome version")],
                compress: true,
                linenos: false,
                import: __dirname + "/src/assets/settings.styl",
            })
        )
        .pipe(rename("app.min.css"))
        .pipe(concat("app.min.css"))
        .pipe(dest("opencode/css"))
        .pipe(server.stream());
}

function js() {
    return src("src/**/*.js", { sourcemaps: false })
        .pipe(jsImport({ hideConsole: true }))
        .pipe(concat("app.js"))
        .pipe(
            minify({
                ext: {
                    src: ".js",
                    min: ".min.js",
                },
                exclude: ["tasks"],
                ignoreFiles: [".combo.js", "-min.js"],
            })
        )
        .pipe(dest("opencode/js", { sourcemaps: false }));
}

function reloadTask(done) {
    server.reload();
    done();
}

function startTask(done) {
    server.init(
        {
            baseDir: "./",
            https: true,
        },
        done
    );
}

// exports.js = js;
// exports.css = css;
// exports.reloadTask = reloadTask;
// exports.startTask = startTask;

function watchTask() {
    watch("src/**/*.styl", series(css));
    watch("src/**/*.js", series(js));

    watch("src/**/*.styl", reloadTask);
    watch("src/**/*.js", reloadTask);
}

exports.default = series(css, js, startTask, watchTask);

//exports.init = series(css, js, startTask, reloadTask);
// exports.default = function () {
//     watch("src/**/*.styl", series(css));
//     watch("src/**/*.js", series(js));
//     watch("src/**/*.styl", series(reloadTask));
//     watch("src/**/*.js", series(reloadTask));
// };
