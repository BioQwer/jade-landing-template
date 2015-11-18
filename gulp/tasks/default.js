var gulp = require('gulp');

gulp.task('default', ['browser-sync', 'stylus', 'jade', 'scripts', 'fonts', 'thirdpartyJs', 'thirdpartyCss', 'data', 'root', 'imagemin', 'watch']);

gulp.task('build', ['stylus', 'jade', 'scripts', 'fonts', 'thirdpartyJs', 'thirdpartyCss', 'data', 'root', 'imagemin']);
