module.exports = {

  codeDist: {

    options: {
      // The default commit message for the gh-pages branch
      commitMessage: 'gh-pages auto commit <%= project.isoUtcDateTime %> (UTC)'
    },

    // The folder where your gh-pages repo is
    src: '<%= project.paths.gh_pages %>'
  }

};
