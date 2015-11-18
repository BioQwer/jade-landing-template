var gulp = require('gulp'),
    concat = require('gulp-concat'),
	stylus = require('gulp-stylus');
 
// Get one .styl file and render 
gulp.task('stylus', function () {
	gulp.src(['./src/styles/base/defaults.styl', './src/styles/modules/*.styl'])
    .pipe(stylus({
        compress: true
    }))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('./build/css/'));
});