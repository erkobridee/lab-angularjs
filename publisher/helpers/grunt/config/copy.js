module.exports = {

  gitignore: {
    files: [
      {
        cwd: './',
        src: ['.gitignore'],
        dest: '<%= project.paths.gh_pages %>/'
      }
    ]
  },

  projectDist: {
    files: [
      {
        cwd: '<%= project.paths.project.dist %>/',
        src: ['**'],
        dest: '<%= project.paths.gh_pages %>/',
        expand: true
      }
    ]
  }

};
