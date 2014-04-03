module.exports = {

  labToDist: {
    files: [
      {
        expand: true,
        cwd: '<%= project.paths.src %>/lab/',
        src: ['**', '!**/*.md'],
        dest: '<%= project.paths.dist %>/lab/'
      }
    ]
  },

  siteToDist: {
    files: [
      {
        expand: true,
        cwd: '<%= project.paths.src %>/site/',
        src: ['**'],
        dest: '<%= project.paths.dist %>/'
      }
    ]
  },

  cdnToDist: {
    files: [
      {
        expand: true,
        cwd: '<%= project.paths.src %>/cdn/',
        src: ['**', '!**/*.md'],
        dest: '<%= project.paths.dist %>/cdn/'
      }
    ]
  }

};
