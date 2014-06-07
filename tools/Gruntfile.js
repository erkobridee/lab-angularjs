module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);

  var path = require('path');

  grunt.log.writeln('\nloading grunt plugins and configs...');
  require('load-grunt-config')(
    grunt, {
      configPath: path.join(process.cwd(), 'helpers/grunt/config')
    }
  );
  grunt.log.writeln('...done\n');

  // load custom tasks
  grunt.loadTasks('helpers/grunt/tasks'); // grunt helloworld
  //grunt.task.run('helloworld');


  //--- grunt tasks

  grunt.registerTask('cleanup', ['clean:dist']);

  grunt.registerTask('default', ['lintspaces', 'jshint', 'cleanup']);


  grunt.registerTask('build', function(target) {

    return  grunt.task.run([
      'copy:labToDist',
      'copy:siteToDist'
    ]);

  });


  grunt.registerTask('dev', function(target) {

    return grunt.task.run([
      'connect:dev',
      'watch'
    ]);

  });


  grunt.registerTask('dist', function(target) {

    return grunt.task.run([
      'default',
      'build',
      'copy:cdnToDist',
      'connect:dist'
    ]);

  });


};
