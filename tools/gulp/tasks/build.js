module.exports = function(gulp, $) {

  gulp.task('build', function( done ) {

    $.runSequence(
      'copy:site2dist',
      'copy:lab2dist',
      done
    );

  });

};
