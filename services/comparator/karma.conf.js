module.exports = function(config) {
  const puppeteer = require('puppeteer');
  process.env.CHROME_BIN = puppeteer.executablePath();

  config.set({
    basePath: '',
    frameworks: [
      'jasmine',
      'requirejs'
    ],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-requirejs'
    ],
    files: [
      'src/**/*.js',
      'spec/**/*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
      '*.js': ['coverage']
    },
    reporters: [
      'dots',
      'coverage'
    ],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        // reporters not supporting the `file` property 
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        // reporters supporting the `file` property, use `subdir` to directly 
        // output them in the `dir` directory 
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
        { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        { type: 'text', subdir: '.', file: 'text.txt' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
         // Without a remote debugging port, Google Chrome exits immediately.
          '--remote-debugging-port=9222',
          '--no-sandbox'
        ],
      }
    },
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity
  })
}
