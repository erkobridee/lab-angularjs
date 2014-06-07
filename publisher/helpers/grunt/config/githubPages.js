module.exports = function(grunt) {

grunt.config('githubPages', {

  codeDist: {

    options: {
      // The default commit message for the gh-pages branch
      commitMessage: '<%= project.gitclone.branch %> automated commit <%= project.isoUtcDateTime %> (UTC)'
    },

    // The folder where your gh-pages repo is
    src: '<%= project.gitclone.directory %>'
  }

});

};
