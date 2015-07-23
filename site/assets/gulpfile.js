var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),

  projectJsFiles = [
    './js/plugins/jquery.fitvids.js',
    './js/plugins/jquery.magnific-popup.js',
    './js/plugins/respond.js',
    './js/plugins/responsive-nav.js',
    './js/plugins/simpleJekyllSearch.js',

    './js/_main.js'
  ],

  CONCAT_JS = 'scripts.min.js',
  JS_OUT_DIR = './js';

gulp.task('concat', function() {
  return gulp.src(projectJsFiles)
    .pipe(concat(CONCAT_JS))
    .pipe(gulp.dest(JS_OUT_DIR));
});

gulp.task('compress', function() {
  return gulp.src(JS_OUT_DIR + '/' + CONCAT_JS)
    .pipe(uglify())
    .pipe(gulp.dest(JS_OUT_DIR));
});
