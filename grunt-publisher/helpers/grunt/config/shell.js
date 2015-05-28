// https://github.com/sindresorhus/grunt-shell
module.exports = function(grunt) {

grunt.config('shell', {

  buildDist: {
    command: 'grunt build',
    options: {
      stdout: true,
      execOptions: {
        cwd: '<%= project.paths.project.tools %>'
      }
    }
  },

  cleanDist: {
    command: 'grunt cleanup',
    options: {
      stdout: true,
      execOptions: {
        cwd: '<%= project.paths.project.tools %>'
      }
    }
  }

});

};
