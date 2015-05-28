module.exports = function(grunt) {

grunt.config('clean', {

  dist: {
    options: { force: true },
    src: ['<%= project.paths.dist %>/']
  }

});

};
