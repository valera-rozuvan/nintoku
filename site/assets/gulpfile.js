var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),

  gutil = require('gulp-util'),

  shell = require('gulp-shell'),

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

gulp.task('concat', function (cb) {
  gutil.log(gutil.colors.cyan('===== START OF: concat task ======'));

  gulp.src(projectJsFiles)
    .pipe(concat(CONCAT_JS))
    .pipe(gulp.dest(JS_OUT_DIR))
    .on('end', function () {
      gutil.log(gutil.colors.cyan('===== END OF: concat task ======'));
      cb();
    });
});

gulp.task('compress', ['concat'], function (cb) {
  gutil.log(gutil.colors.cyan('===== START OF: compress task ======'));

  gulp.src(JS_OUT_DIR + '/' + CONCAT_JS)
    .pipe(uglify())
    .pipe(gulp.dest(JS_OUT_DIR))
    .on('end', function () {
      gutil.log(gutil.colors.cyan('===== END OF: compress task ======'));
      cb();
    });
});

gulp.task('build-js', ['compress']);

gulp.task('style', function () {
  gutil.log(gutil.colors.cyan('===== START OF: style task ======'));

  return gulp.src([
    './js/**/*.js',
    '!./js/vendor/*.js',
    '!./js/plugins/*.js',
    '!./js/**/*.min.js'
  ])
    .pipe(jscs({
      fix: false,
      verbose: true
    }))
    .on('end', function () {
      gutil.log(gutil.colors.cyan('===== END OF: style task ======'));
    });
});

gulp.task('hint', function () {
  gutil.log(gutil.colors.cyan('===== START OF: hint task ======'));

  return gulp.src([
    './js/**/*.js',
    '!./js/vendor/*.js',
    '!./js/plugins/*.js',
    '!./js/**/*.min.js'
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .on('end', function () {
      gutil.log(gutil.colors.cyan('===== END OF: hint task ======'));
    });
});

gulp.task('check', ['style', 'hint']);

gulp.task('less', function (cb) {
  gutil.log(gutil.colors.cyan('===== START OF: less task ======'));

  gulp.src('./less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'))
    .on('end', function () {
      gutil.log(gutil.colors.cyan('===== END OF: less task ======'));
      cb();
    });
});

gulp.task('minify-css', ['less'], function (cb) {
  gutil.log(gutil.colors.cyan('===== START OF: minify-css task ======'));

  gulp.src('./css/main.css')
    .pipe(minifyCss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./css'))
    .on('end', function () {
      gutil.log(gutil.colors.cyan('===== END OF: minify-css task ======'));
      cb();
    });
});

gulp.task('build-css', ['minify-css']);

gulp.task('jekyll', ['build-js', 'build-css', 'check'], function (cb) {
  gutil.log(gutil.colors.cyan('===== START OF: jekyll task ======'));

  gulp.src('')
    .pipe(shell([
      'jekyll build ' +
        '--source ../../site ' +
        '--destination ../../../gh-pages'
    ]))
    .on('end', function () {
      gutil.log(gutil.colors.cyan('===== END OF: jekyll task ======'));
      cb();
    });
});

gulp.task('build', ['jekyll']);
