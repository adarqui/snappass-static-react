'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var reactify = require('reactify');
var sourcemaps = require('gulp-sourcemaps');
var _ = require('lodash');

var customOpts = {
        entries: ['./src/app.js'],
        transform: [reactify],
        debug: true
    },
    opts = _.assign({}, watchify.args, customOpts),
    b = watchify(browserify(opts));

function bundle () {
    return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build'));
};

gulp.task('js', bundle);
b.on('update', bundle);
b.on('log', gutil.log);
