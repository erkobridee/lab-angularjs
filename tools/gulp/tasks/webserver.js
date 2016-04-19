module.exports = function(gulp, $) {

  gulp.task('webserver:dev', function() {
    // https://www.npmjs.com/package/gulp-connect
    $.connect.server({
      port: $.config.webserver.port,
      root: [
        $.config.paths.src,
        $.config.paths.cdn
      ]
    });
    $.open('http://' + $.localip + ':' + $.config.webserver.port);
  });


  gulp.task('webserver:preview', function() {

    if( $.is.preview ) {
      // https://www.npmjs.com/package/gulp-connect
      $.connect.server({
        port: $.config.webserver.port,
        root: [
          $.config.paths.dist,
          $.config.paths.cdn
        ]
      });
      $.open('http://' + $.localip + ':' + $.config.webserver.port);
    } else {
      $.log('Oops release not available...');
    }

  });

};
