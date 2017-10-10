// Karma configuration
// Generated on Tue Oct 10 2017 08:46:17 GMT-0700 (PDT)
var istanbul = require("browserify-istanbul");
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jquery-3.2.1', 'jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      'js/*.js',
      'spec/*-spec.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'js/*.js' : ['browserify'],
      'spec/*.js': ['browserify'],
      './build/js/*.js': ['coverage']
    },
    plugins: [
      'karma-jquery',
      'karma-browserify',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-coverage'
    ],
    browserify: {
     transform: [
       [
         istanbul({
         ignore: ["node_modules/**", "**/*.spec.js"],
         includeUntested: false,
         defaultIgnore: true
         }),
         { global: true }
       ]
     ]
   },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'kjhtml','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
