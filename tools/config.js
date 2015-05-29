module.exports = (function() {

  var path = require('path');
  var pkg = require('../package');

  //---

  var config = {};

  //--

  config.root = './';

  //--

  config.packages = [
    './package.json'
  ];

  //---

  var bannerTitle = pkg.title || pkg.name;

  config.banner =
    '/*!\n' +
    ' * ' + bannerTitle + '\n' +
    ' * ' + pkg.description + '\n' +
    ' * @license ' + pkg.license + '\n' +
    ' * v' + pkg.version + '\n' +
    ' */\n';

  //---

  config.git = {
    branch: 'gh-pages',
    commitMessage: '<%= branch %> automated commit <%= time %>'
  };

  //---

  config.paths = {
    src       : 'src',
    repoDir   : '.local/' + config.git.branch,
    cdn       : 'gitsubmodule',
    build     : '.temp',
    dist      : 'dist'
  };

  //---

  config.lab = {
    js: [
      config.paths.src + '/lab/**/*.js',
      '!' + config.paths.src + '/lab/**/*.min.js',
    ],
    html: [
      config.paths.src + '/lab/**/*.html',
    ],
    glob: [
      config.paths.src + '/lab/**/*',
      '!' + config.paths.src + '/lab/**/*.md'
    ]
  };

  config.site = {
    glob: [
      config.paths.src + '/site/**/*'
    ]
  };

  config.tools = [
    'gulpfile.js',
    'tools/**/*.js'
  ];

  //---

  config.webserver = {
    port: 1337
  };

  //---

  return config;

})();
