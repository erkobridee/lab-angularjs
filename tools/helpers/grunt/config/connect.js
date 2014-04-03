module.exports = {

  dev: {
    options: {
      port: '<%= project.frontend.port.connect %>',
      base: '<%= project.paths.src %>',
      directory: '<%= project.paths.src %>',
      hostname: '*',
      keepalive: true,
      open: 'http://localhost:<%= project.frontend.port.connect %>'
    }
  },

  //---

  dist: {
    options: {
      port: '<%= project.frontend.port.connect %>',
      base: '<%= project.paths.dist %>',
      hostname: '*',
      keepalive: true,
      open: 'http://localhost:<%= project.frontend.port.connect %>'
    }
  }

};
