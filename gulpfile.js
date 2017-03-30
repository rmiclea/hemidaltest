var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var livereload = require('gulp-livereload');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function(){
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(livereload())
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename("style.css"))
    .pipe(gulp.dest(''));
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('default', [ 'html', 'css' ]);
