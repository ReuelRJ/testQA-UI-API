const wait_sec = 9500;
const { BeforeAll, After, Status } = require("cucumber");
const Common = require('../../page-objects/common_actions')
const common = new Common()
const prot = require('protractor')
const DSL = require('../../page-objects/dsl')
const dsl = new DSL();
const config = require('../../files/conf.json')
const ambienteDev = config.AmbienteDev
const usuario1 = config.user1.user
const usuario1Pass = config.user1.password

BeforeAll({ timeout: 60 * wait_sec }, async function () {
    if (process.env.TEST_ENV === 'CI'){
        prot.browser.driver.manage().window().setSize(1980, 1080)
    }
    else{
        prot.browser.driver.manage().window().maximize()
        dsl.login(ambienteDev, usuario1, usuario1Pass)

    }
        console.log("\nStart executing tests on Script ....")
});

After(async function (scenario) {
    let world = this;
    if (process.env.TEST_ENV == 'CI') {
            prot.browser.manage().addCookie({
            name: 'zaleniumTestPassed',
            value: scenario.result.status === Status.FAILED ? 'false' : 'true'
        });
    }
    if (scenario.result.status === Status.FAILED) {
        if (process.env.TEST_ENV == 'CI')
            common.slackCiNotification()
        return await prot.browser.takeScreenshot().then(function (buffer) {
            return world.attach(buffer, "image/png");
        });
    }

});