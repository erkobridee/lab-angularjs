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
        src: [
          './assets/**',
          './lab/**',
          'index.html'
        ],
        dest: '<%= project.gitclone.directory %>/',
        expand: true
      }
    ]
  }

});

};
