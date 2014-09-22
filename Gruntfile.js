module.exports = function(grunt) {

  //new version Project configuration.
  grunt.initConfig({
    uglify: {
      options: {
        banner: '/*!<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['public/js/main.min.js','public/js/json2.min.js'],
        dest: 'public/js/grunt.min.js'
      }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/*!<%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
          'public/css/grunt.min.css': ['public/css/main.css','public/css/dev.css']
        }
      }
    },
    htmlmin: {
      index: {
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true,
          banner: '/*!<%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
          'views/index.min.ejs': 'views/index.ejs'
        }
      }
    },
    jshint: {
      // define the files to lint
      files: ['gruntfile.js', 'public/js/dev.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'public/sass',
          cssDir: 'public/css',
          environment: 'production',
          banner: '/*!<%= grunt.template.today("yyyy-mm-dd") %> */\n',
          specify:['public/sass/compass.scss']
        }
      },
      dev: {
        options: {
          sassDir: 'public/sass',
          cssDir: 'public/css',
          banner: '/*!<%= grunt.template.today("yyyy-mm-dd") %> */\n',
          specify:['public/sass/compass.scss']
        }
      }
    },
    watch:{
      js:{
        files:['public/js/dev.js'],
        tasks:['jshint','uglify']
      },
      css:{
        files:['public/sass/compass.scss'],
        tasks:['compass:dev']
      },
      html:{
        files:['views/index.ejs'],
        tasks:['htmlmin']
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify','compass:dev','htmlmin','watch']);
  grunt.registerTask('dist', ['uglify','compass:dist','htmlmin']);
};
