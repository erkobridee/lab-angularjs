module.exports = function(gulp, $) {

  var jshintStream = $.lazypipe()
    .pipe( $.cached, 'jshint' )
    .pipe( $.jshint )
    .pipe( $.jshint.reporter, 'jshint-stylish' )
    .pipe( $.jshint.reporter, 'fail' );

  //---

  gulp.task('jshint:tools', function() {
    return gulp.src( $.config.tools )
      .pipe( jshintStream() );
  });

  gulp.task('jshint:lab', function() {
    return gulp.src( $.config.lab.js )
      .pipe( jshintStream() );
  });

  gulp.task('jshint', [
    'jshint:tools',
    'jshint:lab'
  ]);

};
