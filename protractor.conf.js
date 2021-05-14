var HtmlReporter = require('protractor-beautiful-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [
        {
            'browserName': 'chrome'
        },
        {
            'browserName': 'firefox',
            'moz:firefoxOptions': {
                'args': ['--safe-mode']
            }
        }
    ],

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['specs/**/*.spec.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    onPrepare: function () {

        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports/html'
        }).getJasmine2Reporter());

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'reports/jasmine'
            })
        );

    }

};
