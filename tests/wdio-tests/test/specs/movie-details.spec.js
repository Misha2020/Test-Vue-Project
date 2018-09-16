var assert = require('assert');
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
const URL = 'http://localhost:8080';

describe('movie details page', () => {
    it('It should login user', function () {
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
    });

    it('it should test movie item', function () {
        browser.click('a[href="#/home/popular"]');

        for (var i = 1; i < 5; i++) {
            var item = ('//div[' + i + ']/div/a/div');
            var title = browser.getText(item);
            console.log('+++++ ' + title);
            browser.click('//div[' + i + ']/div/a');
            browser.pause(500);
            var filmName = browser.getText('div[class="title"]');
            assert.equal(title, filmName);
            browser.click('span[class="vue-star-rating-pointer vue-star-rating-star"]');
            browser.back();
        }
    });

    it('it should test scroll', function () {
        browser.moveToObject('//div[20]/div/a/div');
        browser.pause(1000);
    });

    it('it should logout user', function () {
        browser.click('button[class="btn btn-secondary btn-sm"]');
        chai.expect(browser.getUrl()).to.contain("login");
    })
});