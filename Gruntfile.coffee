module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-express-server'

  grunt.initConfig
    watch:
      coffee:
        files: ["app.coffee"]
        tasks: ["coffee"]

    express:
      options:
        port: 5000
        script: "app.js"
      development: {}

    coffee:
      server:
        files:
          "app.js": "app.coffee"

  grunt.registerTask "default", [
    "coffee"
    "express"
    "watch"
  ]
