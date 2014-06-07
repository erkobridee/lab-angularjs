module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt)({
    customTasksDir: 'helpers/grunt/tasks'
  });

  // Initialize config
  grunt.initConfig({
    pkg: require('./package.json')
  });

  // load tasks config per file
  grunt.loadTasks('helpers/grunt/config');

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
