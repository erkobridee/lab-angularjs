module.exports = function(grunt) {  
  'use strict';

  // load all grunt tasks -> see package.json :: devDependencies
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  //---

  var serverPort = 1337;

  //---

  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),

    paths: {
      build: 'dist',
      gh_pages: 'cache/gh_pages'
    },

    //----------

    jshint: {
      all: [
        'Gruntfile.js',        
        'lab/**/*.js',
        '!lab/**/{scripts/libs,vendor}/**/*.min.js',
        '!lab/**/jasmine*.js'
      ]
    },

    //----------

    connect: {

      dev: {
        options: {
          port: serverPort,
          base: 'lab',
          keepalive: true
        }
      },

      test: {
        options: {
          port: serverPort,
          base: 'dist',
          keepalive: true
        }
      }

    },

    //----------

    open: {
      webapp: {
        path: 'http://localhost:' + serverPort
      }
    },

    //----------

    clean: {
      
      build: ['<%= paths.build %>/'],

      gh_pages: [
        '!<%= paths.gh_pages %>/.git',
        '<%= paths.gh_pages %>/**/*'
      ]

    },

    //----------

    copy: {
      
      build: {
        files: [
          {expand: true, cwd: 'lab/', src: ['**', '!**/*.md'], dest: '<%= paths.build %>/lab/'},
          {expand: true, cwd: 'site/', src: ['**'], dest: '<%= paths.build %>/'}
        ]
      },

      gh_pages: {
        files: [
          {expand: true, cwd: 'lab/', src: ['**', '!**/*.md'], dest: '<%= paths.gh_pages %>/lab/'},
          {expand: true, cwd: 'site/', src: ['**'], dest: '<%= paths.gh_pages %>/'}
        ]
      }
    },

    //----------

    /*
      Grunt Github Pages
      https://github.com/thanpolas/grunt-github-pages
    */
    githubPages: {
      gh_pages: {
        options: {
          // The default commit message for the gh-pages branch
          commitMessage: 'gh-pages auto commit <%= grunt.template.today("isoUtcDateTime") %>'
        },
        // The folder where your gh-pages repo is
        src: '<%= paths.gh_pages %>'
      }
    }

    //----------

  };

  grunt.initConfig(gruntConfig);

  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('dev', [
    'jshint', 
    'open',
    'connect:dev'
  ]);

  grunt.registerTask('test', [
    'jshint', 
    'clean:build', 
    'copy:build', 
    'open',
    'connect:test'    
  ]);

  grunt.registerTask('publish', [
    'jshint', 
    'clean:gh_pages', 
    'copy:gh_pages', 
    'githubPages:gh_pages'
  ]);


};