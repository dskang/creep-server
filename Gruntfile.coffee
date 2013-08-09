module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-nodemon'
  grunt.loadNpmTasks 'grunt-concurrent'

  grunt.initConfig
    watch:
      coffee:
        files: ["app.coffee"]
        tasks: ["coffee"]

    coffee:
      server:
        files:
          "app.js": "app.coffee"

    nodemon:
      dev:
        options:
          file: "app.js"

    concurrent:
      target:
        tasks: [
          "nodemon"
          "watch"
        ]
        options:
          logConcurrentOutput: true

  grunt.registerTask "default", [
    "coffee"
    "concurrent"
  ]
