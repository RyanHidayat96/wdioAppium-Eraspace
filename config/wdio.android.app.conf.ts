import { join } from 'path';
import config from './wdio.shared.local.appium.conf';

// ============
// Specs
// ============
// config.specs = ['./tests/scenarios/**/*'];
config.specs = ['./tests/scenarios/SIT/other/StockInfo/app.UnitStock..ts'];
// config.specs = ['./tests/scenarios/**/Suspect/EditSuspectDetail/*'];


// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        'appium:deviceName': '6d82ef39', //2e965e4f //6847fdb20221 //ryan emulator-5554 dan a8b7cd65
        'appium:platformVersion': '14',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        // The path to the app
        'appium:app': join(process.cwd(), './apps/Eraspacecom.eraspace.appv5.12.1.apk'), //"D:\ASTRA INTERNATIONAL\Project AT\wdio-SAM\apps\SIT\"
        //apps\SIT\SAMQA_id.astra.tso.sam.qa-0.apk
        // @ts-ignore
        //apps\SIT\SAMQA_id.astra.tso.sam.qa.apk
        // 'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        'appium:newCommandTimeout': 240,
        'appium:autoGrantPermissions': true
    },

];

config.services = [
    ['appium', {
        logPath: './',
        args: {
            address: '127.0.0.1',
            port: 4723,
        },
    }],
];

// ============
// Timeout Configuration
// ============
config.connectionRetryTimeout = 90000; // 90 seconds
config.connectionRetryCount = 3;

config.onComplete = function (exitCode, config, capabilities, results) {
    // Cleanup code after all tests have run
    console.log('All tests are done!');
    // Optionally, you can add logic to close the session here, but WebdriverIO should handle this automatically
};

exports.config = config;
