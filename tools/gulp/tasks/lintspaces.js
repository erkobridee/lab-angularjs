module.exports = function(gulp, $) {

  // https://github.com/ck86/gulp-lintspaces

  var lintspacesStream = $.lazypipe()
    .pipe( $.cached, 'lintspaces' )
    .pipe( $.lintspaces, { editorconfig: '.editorconfig' } )
    .pipe( $.lintspaces.reporter );

  //---

  gulp.task('lintspaces:lab:html', function() {

    return gulp.src( $.config.lab.html )
      .pipe( lintspacesStream() );

  });

  gulp.task('lintspaces:lab:js', function() {

    return gulp.src( $.config.lab.js )
      .pipe( lintspacesStream() );

  });

  gulp.task('lintspaces:tools', function() {

    return gulp.src( $.config.tools )
      .pipe( lintspacesStream() );

  });

  //---

  gulp.task('lintspaces', [
    'lintspaces:tools',
    'lintspaces:lab:js',
    'lintspaces:lab:html'
  ]);

};
