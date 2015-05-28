module.exports = function(grunt) {

grunt.config('lintspaces', {

  all: {
    src: [
      '<%= project.paths.src %>/*.{html,css,js,coffee}',
      '!<%= project.paths.src %>/cdn/**/*',
      '<%= project.paths.src %>/lab/**/*.{html,css,js,coffee,less}',
      '!<%= project.paths.src %>/lab/**/lib/**/*.{html,css,js,coffee,less}'
    ],
    options: {
      editorconfig: '<%= project.paths.editorconfig %>'
    }
  }

});

};
