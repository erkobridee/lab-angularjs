module.exports = function(grunt) {

grunt.config('copy', {

  gitignore: {
    files: [
      {
        cwd: './',
        src: ['.gitignore'],
        dest: '<%= project.gitclone.directory %>/'
      }
    ]
  },

  projectDist: {
    files: [
      {
        cwd: '<%= project.paths.project.dist %>/',
        src: ['**'],
        dest: '<%= project.gitclone.directory %>/',
        expand: true
      }
    ]
  }

});

};
