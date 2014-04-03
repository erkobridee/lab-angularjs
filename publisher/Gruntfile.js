module.exports = function(grunt) {
  'use strict';

  var path = require('path'),
      cwd =  process.cwd();

  grunt.log.writeln('\nloading grunt plugins and configs...');
  require('load-grunt-config')(
    grunt, {
      configPath: path.join(cwd, 'helpers/grunt/config'),
      config: {
        mainPkg: grunt.file.readJSON(path.join(cwd, '../package.json'))
      }
    }
  );
  grunt.log.writeln('...done\n');

  // load custom tasks
  grunt.loadTasks('helpers/grunt/tasks'); // grunt helloworld
  //grunt.task.run('helloworld');


  //--- grunt tasks

  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('init', [
    'jshint',
    'clean:gh_pages_dir',
    'gitclone:gh_pages'
  ]);

  grunt.registerTask('publish',  function(target) {
    var message = 'publish ',
        tasks = [
          'jshint',
          'clean:gh_pages_content',
          'copy:gitignore'
        ];

    tasks = tasks.concat([
      'shell:buildDist',
      'copy:projectDist',
      'shell:cleanDist',
      'githubPages:codeDist'
    ]);

    grunt.log.writeln(message);
    //console.log(tasks);
    return grunt.task.run(tasks);
  });

};
