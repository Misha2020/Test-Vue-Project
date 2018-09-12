var assert = require('assert');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
const URL = 'http://localhost:8080';

describe('movie details page', () => {
    it('It should get access to next page', function () {
        browser.url(URL);

        browser.setValue('input[id="apiKeyInput"]', '1ccae326a593ca0d20294e664bea1c60');
        browser.click('button[class="btn btn-primary"]');

        browser.pause(1000);

        browser.click('button[class="new login"]');
        browser.setValue('input[name="username"]', 'MykhailoBondarchuk');
        browser.setValue('input[name="password"]', 'misha0994934452');
        browser.click('input[class="right center"]');
        browser.click('button[id="allow_authentication"]');
        browser.pause(1000);

        browser.click('a[href="#/home/popular"]');
        browser.isEnabled('div[class="info"]');
        browser.click('div[class="title"]');

        browser.pause(1000);
        browser.click('span[class="vue-star-rating-pointer vue-star-rating-star"]');

        browser.click('button[class="btn btn-secondary btn-sm"]');
        chai.expect(browser.getUrl()).to.contain("login");
    });
});