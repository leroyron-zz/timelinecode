// <binding BeforeBuild='default' Clean='clean' ProjectOpened='watch' />
var gulp = require('gulp'),
    // browser
    browserify  = require('browserify'),
    buffer      = require('vinyl-buffer'),
    source      = require('vinyl-source-stream'),
    // typescript
    ts          = require('gulp-typescript'),
    tsProject   = ts.createProject('tsconfig.json'),
    tsify       = require('tsify'),
    // development
    rename      = require('gulp-rename'),
    gutil       = require('gulp-util'),
    watchify    = require('watchify'),
    uglify      = require('gulp-uglify'),
    sourcemaps  = require('gulp-sourcemaps'),

    paths = {
        libname: 'TIMELINE',
        libfilename: 'timelinecode',
        libsrc: './',
        libdist: './dist/',
        libfiles: [
            'index.ts'
        ],
        src: './',
        dist: 'dist/'
    },

    _ = require('underscore');

    gulp.task('default', [
        //'lib', 
        'lib:watch',
        //'lib:min'// minification
    ]);

    // Library
    gulp.task('lib:watch', function () {
        // we define our input files, which we want to have
        // bundled: seperate libraries
        //
        // map them to our stream function
        paths.libfiles.map(function (entry, index) {
            var fileBrowser = browserify({
                standalone: paths.libname,
                basedir: paths.libsrc,
                entries: [entry],
                plugin: [watchify],
                debug: true,
                cache: {},
                packageCache: {}
            }).plugin(tsify).transform('babelify', {
                presets: ['es2015'],
                extensions: ['.ts']
                })

            function bundle() {
                fileBrowser.bundle()
                    .pipe(source(entry))
                    // rename them to have 'libfilename + extname as postfix'
                    .pipe(rename({
                        basename: paths.libfilename,
                        extname: '.js'
                    }))
                    .pipe(buffer())
                    .pipe(sourcemaps.init({ loadMaps: true }))
                    .pipe(sourcemaps.write('./'))
                    .pipe(gulp.dest(paths.libdist + 'js/'));
            }
            fileBrowser.on('update', bundle);
            fileBrowser.on('log', gutil.log);
            bundle()
        });
        paths.libfiles = undefined // remove entry files // prevent rewatch by "re" gulp task
    });

    gulp.task('lib', function () {
        paths.libfiles.map(function (entry, index) {
            var fileBrowser = browserify({
                standalone: paths.libname,
                basedir: paths.libsrc,
                entries: [entry],
                debug: true,
                cache: {},
                packageCache: {}
            }).plugin(tsify).transform('babelify', {
                presets: ['es2015'],
                extensions: ['.ts']
                })

            function bundle() {
                fileBrowser.bundle()
                    .pipe(source(entry))
                    .pipe(rename({
                        basename: paths.libfilename,
                        extname: '.js'
                    }))
                    .pipe(buffer())
                    .pipe(sourcemaps.init({ loadMaps: true }))
                    .pipe(sourcemaps.write('./'))
                    .pipe(gulp.dest(paths.libdist + 'js/'));
            }
            bundle()
        });
        paths.libfiles = undefined //
    });

    gulp.task('lib:min', function () {
        paths.libfiles.map(function (entry, index) {
            var fileBrowser = browserify({
                standalone: paths.libname,
                basedir: paths.libsrc,
                entries: [entry],
                debug: true,
                cache: {},
                packageCache: {}
            }).plugin(tsify).transform('babelify', {
                presets: ['es2015'],
                extensions: ['.ts']
                })

            function bundle() {
                fileBrowser.bundle()
                    .pipe(source(entry))
                    .pipe(rename({
                        basename: paths.libfilename,
                        extname: '.min.js'
                    }))
                    .pipe(buffer())
                    .pipe(sourcemaps.init({ loadMaps: true }))
                    .pipe(uglify())
                    .pipe(sourcemaps.write('./'))
                    .pipe(gulp.dest(paths.libdist + 'js/'));
            }
            bundle()
        });
        paths.libfiles = undefined //
    });
