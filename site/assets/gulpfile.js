var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),

  jscs = require('gulp-jscs'),
  jshint = require('gulp-jshint'),

  // For debugging purposes.
  // print = require('gulp-print'),

  less = require('gulp-less'),
  minifyCss = require('gulp-minify-css'),
  path = require('path'),

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

gulp.task('style', function () {
  return gulp.src([
    './js/**/*.js',
    '!./js/vendor/*.js',
    '!./js/plugins/*.js',
    '!./js/**/*.min.js'
  ])
  .pipe(jscs({
    fix: false,
    verbose: true
  }));
});

gulp.task('hint', function () {
  return gulp.src([
    './js/**/*.js',
    '!./js/vendor/*.js',
    '!./js/plugins/*.js',
    '!./js/**/*.min.js'
  ])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('less', function () {
  return gulp.src('./less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('minify-css', function() {
  return gulp.src('./css/main.css')
    .pipe(minifyCss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./css'));
});
