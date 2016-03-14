var gulp = require('gulp');
var uglify = require('gulp-uglify');
var requirejsOptimize = require('gulp-requirejs-optimize');
var rev = require('gulp-rev');
var del = require('del');

gulp.task('clean-build', function () {
    return del(['./build/*.js']);
});

gulp.task('requirejs', ['babel', 'clean-build'], function() {
    return gulp.src('./bootstrap.js')
    .pipe(requirejsOptimize({
        out: 'app.min.js',
        optimize: "none",
        skipDirOptimize: "true",
        baseUrl: "./dist",
        name: "./../bootstrap",
        paths: {
            jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
            waitForImages: './../bower_components/waitForImages/dist/jquery.waitforimages.min',
            TweenLite: "./../bower_components/gsap/src/minified/TweenMax.min",
            // Include current page-block sources from their location in bower_components
            // if you are using bower to fetch this lib.
            "state": "./../bower_components/pageblock/dist/state",
            "router": "./../bower_components/pageblock/dist/router",
            "graphicLoader": "./../bower_components/pageblock/dist/graphicLoader",
            "nav": "./../bower_components/pageblock/dist/nav",
            "abstract-page": "./../bower_components/pageblock/dist/abstract-page",
            "abstract-block": "./../bower_components/pageblock/dist/abstract-block",
            // Utils functions and classes
            "utils/utils": "./../bower_components/pageblock/dist/utils/utils",
            "utils/gaTrackErrors": "./../bower_components/pageblock/dist/utils/gaTrackErrors",
            "utils/polyfills": "./../bower_components/pageblock/dist/utils/polyfills",
            "utils/debounce": "./../bower_components/pageblock/dist/utils/debounce",
            "utils/bootstrapMedia": "./../bower_components/pageblock/dist/utils/bootstrapMedia",
            // If you want to use example Page and Home classes in your project
            "pages/page": "./../bower_components/pageblock/dist/pages/page",
        }
    }))
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('build'));
});
