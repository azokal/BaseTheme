var gulp = require('gulp');
var uglify = require('gulp-uglify');
var requirejsOptimize = require('gulp-requirejs-optimize');
var rev = require('gulp-rev');
var del = require('del');

gulp.task('clean-build', function () {
    del(['./dist/*.js']);
    return del(['./build/*.js']);
});

gulp.task('requirejs', ['babel', 'clean-build'], function() {
    return gulp.src('./bootstrap.js')
    .pipe(requirejsOptimize({
        out: 'app.min.js',
        baseUrl: "./dist",
        name: "./../bootstrap",
        paths: {
            /*
             * Do not include these lib to load them from CDN
             */
            jquery: 'empty:',
            TweenLite: "empty:",
            TweenMax: "empty:",
            /*
             * Compile dep
             */
            Lazyload: './../bower_components/vanilla-lazyload/dist/lazyload',
            waitForImages: './../bower_components/waitForImages/dist/jquery.waitforimages.min',
            scrollTo: "./../bower_components/gsap/src/minified/plugins/ScrollToPlugin.min",
            isMobile: "./../bower_components/isMobile/isMobile.min",
            actual: "./../bower_components/jquery.actual/jquery.actual.min",
            Hammer: "./../bower_components/hammerjs/hammer.min",
            loglevel: "./../bower_components/loglevel/dist/loglevel.min",
            // Utils functions and classes
            "utils/utils": "./../bower_components/pageblock/dist/utils/utils",
            "utils/gaTrackErrors": "./../bower_components/pageblock/dist/utils/gaTrackErrors",
            "utils/polyfills": "./../bower_components/pageblock/dist/utils/polyfills",
            "utils/debounce": "./../bower_components/pageblock/dist/utils/debounce",
            "utils/scroll": "./../bower_components/pageblock/dist/utils/scroll",
            "utils/bootstrapMedia": "./../bower_components/pageblock/dist/utils/bootstrapMedia",
            // Include current page-block sources from their location in bower_components
            // if you are using bower to fetch this lib.
            "state": "./../bower_components/pageblock/dist/state",
            "router": "./../bower_components/pageblock/dist/router",
            "graphicLoader": "./../bower_components/pageblock/dist/graphicLoader",
            "abstract-nav": "./../bower_components/pageblock/dist/abstract-nav",
            "abstract-page": "./../bower_components/pageblock/dist/abstract-page",
            "abstract-block": "./../bower_components/pageblock/dist/abstract-block",
            // If you want to use example Page and Home classes in your project
            // "pages/page": "./../bower_components/pageblock/dist/pages/page",
            // "pages/home": "./../bower_components/pageblock/dist/pages/home"
        }
    }))
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('build'));
});
