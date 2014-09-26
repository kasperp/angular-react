module.exports = function(grunt) {

  grunt.initConfig({
    watch : {
      files: ['angular-react.js'],
      tasks: ['build'],
    },
    uglify: {
      'build-minify' : {
        options: {
          mangle: {
            except: ['angular', 'React']
          },
          compress: true,
          wrap: true
        },
        files: {
          'angular-react.min.js' : 'angular-react.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['uglify']);
};