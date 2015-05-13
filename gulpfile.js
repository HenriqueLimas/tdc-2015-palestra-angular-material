var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync({
    port: 9000,
    server: {
      baseDir: ['.']
    }
  });

  gulp.watch(['*.html', 'src/**/*.js']);
})
