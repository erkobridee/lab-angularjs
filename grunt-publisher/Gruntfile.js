module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    gitclone: 'grunt-git'
  })({
    customTasksDir: 'helpers/grunt/tasks'
  });

  var path = require('path'),
      cwd =  process.cwd();

  // Initialize config
  grunt.initConfig({
    pkg: require('./package.json'),
    mainPkg: require(path.join(cwd, '../package.json'))
  });

  // load tasks config per file
  grunt.loadTasks('helpers/grunt/config');

  //--- grunt tasks

  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('init', [
    'jshint',
    'clean:branch_dir',
    'gitclone:target'
  ]);

  grunt.registerTask('publish',  function(target) {
    var message = 'publish ',
        tasks = [
          'jshint',
          'clean:branch_dir_content',
          'copy:gitignore'
        ];

    tasks = tasks.concat([
      'shell:buildDist',
      'copy:projectDist',
      'shell:cleanDist',
      'githubPages:codeDist'
    ]);

    grunt.log.writeln(message);
    return grunt.task.run(tasks);
  });

};
