'use strict';

var gulp     = require('gulp'),
  concat     = require('gulp-concat'),
  uglify     = require('gulp-uglify'),
   clean     = require('gulp-clean-css'),
  rename     = require('gulp-rename'),
  responsive = require('gulp-responsive-images');

gulp.task('responsive', function() {
  return gulp.src('img/**/*')
    .pipe(responsive({
        '**/*.*': [{
        width: 1600,
        suffix: '_large',
        quality: 80
      },{
        width: 760,
        suffix: '_med',
        quality: 75
      },{
        width: 480,
        suffix: '_small',
        quality: 70
      }]
    }))
    .pipe(gulp.dest('images'));
  });

gulp.task('concatScripts', function () {
  gulp.src([
    'js/jquery.js',
    'js/fastclick.js',
    'js/foundation.js',
    'js/foundation.equalizer.js',
    'js/foundation.reveal.js'])
  .pipe(concat("scripts.js"))
  .pipe(gulp.dest("js"));
});

gulp.task('minifyScripts', function () {
  gulp.src('js/scripts.js')
  .pipe(uglify())
  .pipe(rename('scripts.min.js'))
  .pipe(gulp.dest("js"));
});

gulp.task('concatStyles', function () {
  gulp.src([
    'css/normalize.css',
  //'css/foundation.css',
    'css/basics.css',
    'css/menu.css',
    'css/hero.css',
    'css/photo-grid.css',
    'css/modals.css',
    'css/footer.css'])
  .pipe(concat("styles.css"))
  .pipe(gulp.dest("css"));
});

gulp.task('minifyStyles', function () {
  gulp.src('css/styles.css')
  .pipe(clean())
  .pipe(rename('styles.min.css'))
  .pipe(gulp.dest("css"));
})

gulp.task('hello', function () {
  console.log('Hello!');
});
