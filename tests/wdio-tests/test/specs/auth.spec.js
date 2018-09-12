var assert = require('assert');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
const URL = 'http://localhost:8080';

describe.skip('auth page', () => {
    it('It should get access to next page', function () {
        browser.url(URL);
        var title = browser.getTitle();
        assert.equal(title, 'Films Info');

        var apiKeyField = browser.isExisting('=API');
        console.log(apiKeyField);
        browser.pause(1000);
        browser.setValue('input[id="apiKeyInput"]', '1ccae326a593ca0d20294e664bea1c60');
        browser.pause(1000);
        var submitBtn = browser.isExisting('=Submit');
        console.log(submitBtn);
        browser.click('button[class="btn btn-primary"]');
        browser.pause(1000);

        var siteUrl = browser.getUrl();
        chai.expect(siteUrl).to.contain("https://www.themoviedb.org/");
        browser.pause(1000);

        browser.click('button[class="new login"]');
        browser.setValue('input[name="username"]', 'MykhailoBondarchuk');
        browser.setValue('input[name="password"]', 'misha0994934452');
        browser.click('input[class="right center"]');
        browser.click('button[id="allow_authentication"]');
        browser.pause(1000);

        var popularMenu = browser.isEnabled('nav[class="navbar navbar-dark bg-primary"]');
        console.log('Popular Menu is Enable' + popularMenu);
        browser.click('a[href="#/home/popular"]');
        var upcomingMenu = browser.isEnabled('a[href="#/home/upcoming"]');
        console.log('Upcoming Menu is Enable' + upcomingMenu);
        browser.click('a[href="#/home/upcoming"]');

        browser.isEnabled('button[class="btn btn-secondary btn-sm"]');
        browser.click('button[class="btn btn-secondary btn-sm"]');
        chai.expect(browser.getUrl()).to.contain("login");
    });
});