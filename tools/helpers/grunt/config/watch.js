module.exports = function(grunt) {

grunt.config('watch', {

  js: {
    files: [
      '<%= project.paths.src %>/lab/**/*.js'
    ],
    tasks : [ 'jshint:project' ]
  }

});

};
