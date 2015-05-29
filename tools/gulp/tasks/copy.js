module.exports = function(gulp, $) {

  gulp.task('copy:site2dist', function() {
    return gulp.src( $.config.site.glob )
      .pipe( gulp.dest( $.config.paths.dist ) );
  });

  gulp.task('copy:lab2dist', function() {
    return gulp.src( $.config.lab.glob )
      .pipe( gulp.dest( $.config.paths.dist + '/lab' ) );
  });

  //---

  gulp.task('copy:dist2repo-dir', function() {
    return gulp.src( $.config.paths.dist + '/**/*' )
      .pipe( gulp.dest( $.config.paths.repoDir ) );
  });

};
