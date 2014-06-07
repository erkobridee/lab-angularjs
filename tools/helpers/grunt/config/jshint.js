module.exports = function(grunt) {

grunt.config('jshint', {

  options: {
    reporter: require('jshint-stylish')
  },

  grunt: [
    'Gruntfile.js'
  ],

  helpers: [
    'helpers/grunt/**/*.js'
  ],

  project: [
    '<%= project.paths.src %>/{,lab/**/}*.js',
    '!<%= project.paths.src %>/lab/**/{scripts/libs,vendor}/**/*.min.js',
    '!<%= project.paths.src %>/lab/**/jasmine*.js'
  ]

});

};
