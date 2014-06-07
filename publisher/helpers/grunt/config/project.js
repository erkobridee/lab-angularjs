module.exports = function(grunt) {

grunt.config('project', {

  isoUtcDateTime: '<%= grunt.template.today("isoUtcDateTime") %>',

  paths: {
    project: {
      dist: '../dist',
      tools: '../tools'
    }
  },

  gitclone: {
    branch: 'gh-pages',
    directory: '.local/<%= project.gitclone.branch %>',
    repository: '<%= mainPkg.repository.url %>'
  }

});

};
