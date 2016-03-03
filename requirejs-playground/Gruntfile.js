module.exports = function( grunt ) {
  grunt.loadNpmTasks('grunt-contrib-requirejs');
 
  grunt.initConfig({
    requirejs: {
      compile: {
        options: {
          baseUrl: 'client/js', // All RequireJS modules and scripts are located relative to this path.
          out: 'client/js/prod-almond.js', // Where the production ready file will be output. You can name this anything you like
          name: 'vendor/almond0.3.1', // Where the almond.js library file is located (relative to the baseUrl). This tells the optimizer tool to compile a production version via amond
          include: 'config/config', // Where our main dependencies are required (main.js)
          mainConfigFile: 'client/js/config/config.js' // Where our main configurations are set up
        }
      }
    }
  });
};