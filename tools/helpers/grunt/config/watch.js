module.exports = {

  js: {
    files: [
      '<%= project.paths.src %>/lab/**/*.js'
    ],
    tasks : [ 'jshint:project' ]
  }

};
