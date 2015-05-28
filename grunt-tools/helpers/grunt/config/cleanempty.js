module.exports = function(grunt) {

grunt.config('cleanempty', {

  dist: {
    options: { force: true },
    src: ['<%= project.paths.dist %>/**/*']
  }

});

};
