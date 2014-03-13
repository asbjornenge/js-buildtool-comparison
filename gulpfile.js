var gulp      = require('gulp');
var sass      = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var rename    = require("gulp-rename");

gulp.task('default', function() {
  // place code for your default task here
  console.log('mor t sjur ( . )( . )')
});

gulp.task('sass', function () {
    gulp.src('./input/sass/bootstrap.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(rename("gulp.css"))
        .pipe(gulp.dest('./output'));
});