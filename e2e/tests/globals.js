const HtmlReporter = require('nightwatch-html-reporter');
const _ = require('lodash');

const REACT_BANK_APP = _.isEmpty(process.env.REACT_BANK_APP) ? 'http://localhost:3000' : _.trim(process.env.REACT_BANK_APP);

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

    waitForConditionPollInterval: 300,
    waitForConditionTimeout: 10000,
    retryAssertionTimeout: 10000,

    reporter: function (results, done) {
        reporter.fn(results, done);
        done();
    },

    afterEach: function (client, done) {
        const browserName = client.options.desiredCapabilities.browserName;
        //handles browser alerts
        if(browserName === 'internet explorer' || browserName === 'firefox') {
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

    REACT_BANK_APP: REACT_BANK_APP,
    pages: PAGES
};