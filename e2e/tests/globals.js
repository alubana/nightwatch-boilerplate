const HtmlReporter = require('nightwatch-html-reporter');
const _ = require('lodash');

// const DEFAULT_BRAND = 'maryland-529';
//
// const AH_PROFILE_PATH = '/usis/go-tuition-profile/';
// const GIFTER_PROFILE_PATH = '/usis/go-tuition-gift/';
//
// const ACCOUNT_HOLDER_APP = (_.isEmpty(process.env.ACCOUNT_HOLDER_APP)) ? 'https://localhost:3001' : _.trim(process.env.ACCOUNT_HOLDER_APP);
// const GIFTER_APP = (_.isEmpty(process.env.GIFTER_APP)) ? 'https://localhost:3002' : _.trim(process.env.GIFTER_APP);
//
// const AH_BRAND_PATH = AH_PROFILE_PATH + ((_.isEmpty(process.env.AH_BRAND_NAME)) ? DEFAULT_BRAND : _.trim(process.env.AH_BRAND_NAME));
// const GF_BRAND_PATH = GIFTER_PROFILE_PATH + ((_.isEmpty(process.env.GF_BRAND_NAME)) ? DEFAULT_BRAND : _.trim(process.env.GF_BRAND_NAME));

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

const pages = {

    reactBank: {
        landing: '/'
    }

    // //account holder paths
    // landing: '/',
    // getting_started: '/getting-started',
    // dashboard: '/dashboard',
    // terms_and_conditions: '/terms-and-conditions',
    // cookie: '/usis/go-tuition-profile/api/secure/set-cookie/',
    // edit_profile: '/edit-profile',
    // share_page: '/share-page',
    // edit_account: '/edit-account',
    // complete_setup: '/completed-setup',
    // add_picture: '/add-picture',
    // edit_picture: '/edit-picture',
    // add_message: '/add-message',
    // edit_message: '/edit-message',
    // publish: '/publish',
    // //gifter paths
    // gifter: {
    //     landing: '/',
    //     gifter_amount_123: '/amount/123',
    //     complete_gift_123: '/complete-gift/123',
    //     gifter_123: '/123',
    //     gift_shortMsg: '/shortMsg',
    //     ready_gift_123: '/ready-gift/123',
    //     email_123: '/email/123',
    //     select_account: '/select-account/123',
    //     //Branded Mocked profiles
    //     bene_Profile_maryland_529: '/maryland-529',
    //     bene_Profile_national_529: '/national-529',
    //     bene_Profile_alaska_529: '/maryland-529',
    // }
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

    REACT_BANK_APP: REACT_BANK_APP
};