module.exports = function(gulp, $) {

  gulp.task('watch', ['webserver:dev'], function() {

    // lab javascript
    gulp
      .watch( $.config.lab.js, [
        'jshint:lab',
        'lintspaces:lab:js'
      ] );

    // lab html
    gulp
      .watch( $.config.lab.html, [
        'lintspaces:lab:html'
      ] );

  });

};
