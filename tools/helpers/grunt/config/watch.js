module.exports = function(grunt) {

grunt.config('watch', {

  js: {
    files: [
      '<%= project.paths.src %>/lab/**/*.js'
    ],
    tasks : [ 'jshint:project' ]
  },

  lintspaces: {
    files: [
      '<%= project.paths.src %>/lab/**/*.{html,css,js,coffee,less}'
    ],
    tasks : [ 'lintspaces' ]
  }

});

};
