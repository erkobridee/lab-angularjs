module.exports = function(grunt) {

grunt.config('project', {

  paths: {
    src: '../src',
    dist: '../dist',
    editorconfig: '../.editorconfig'
  },

  frontend: {
    port: {
      connect: 1337,
      livereload: 9999 // default: 35729
    }
  }

});

};
