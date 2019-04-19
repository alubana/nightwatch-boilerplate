const HtmlReporter = require('nightwatch-html-reporter');
const fs = require('fs');


const reporter = new HtmlReporter({
  openBrowser: false,
  reportsDirectory: __dirname + '/reports/',
  reportFilename: 'report.html',
  themeName: 'default',
  hideSuccess: false,
  uniqueFilename: false,
  relativeScreenshots: true
});

const PAGES = {
  reactBank: {
    landing: '/'
  }
};

module.exports = {
  abortOnAssertionFailure: true,
  checkBrowserForError: true,
  waitForConditionPollInterval: 500,
  waitForConditionTimeout: 10000,
  retryAssertionTimeout: 10000,
  waitForPageLoadTimeout: 20000,

  reporter: reporter.fn,
  write: function (results, options, done) {
    reporter.fn(results, done);
  },
  afterEach: function (client, done) {

    fs.writeFile('execution.log', `------ END OF MODULE ${JSON.stringify(client.currentTest.module)} ------\n\n`,
            {flag: 'a'}, function (err) {
              if (err) client.logger(err);
            });

    const browserName = client.options.desiredCapabilities.browserName;
        //handles browser alerts
    if (browserName === 'internet explorer' || browserName === 'firefox') {
      client.closeWindow();
    }
        //Exceptions will be thrown in selenium log for firefox and ie - No impact on test case execution
    client.end();
    setTimeout(function () {
      done();
    }, 200);
  },
  beforeEach: function (client, done) {
    client.maximizeWindow();
    setTimeout(function () {
      done();
    }, 200);
  },
  APP_BASE_URL: (process.env.APP_BASE_URL) || 'localhost:3000',
  rootAppSelector: '#root',
  loadingAnimationSelector: '.animation',
  pages: PAGES,
  visual_regression_settings: {
    latest_screenshots_path: 'vrt/latest',
    latest_suffix: '',
    baseline_screenshots_path: 'vrt/baseline',
    baseline_suffix: '',
    diff_screenshots_path: 'vrt/diff',
    diff_suffix: '',
    threshold: 0,
    prompt: false,
    always_save_diff_screenshot: false
  }
};
