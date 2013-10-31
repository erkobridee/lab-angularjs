module.exports = {

  reload: {
    files : [
      '!<%= app.path %>/**/*.less',
      '<%= app.path %>/**/*.{html,css,js}'
    ],
    options: {
      livereload: true
    }    
  },

  js: {
    files: [
      '<%= app.path %>/**/*.js'
    ],
    tasks : [ 'jshint' ]
  }

  // TODO: watch less and call less compile task

};