const assert = require('assert');
const chai = require('chai');
const chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

const URL = 'http://localhost:8080';
const API_KEY = '1ccae326a593ca0d20294e664bea1c60';
const USERNAME = 'MykhailoBondarchuk';
const PASSWORD = 'misha0994934452';

describe('movie details page', () => {
    it('It should login user',  () => {
        browser.url(URL);

        browser.setValue('input[id="apiKeyInput"]', API_KEY);
        browser.click('button[class="btn btn-primary"]');

        browser.pause(1000);

        browser.click('button[class="new login"]');
        browser.setValue('input[name="username"]', USERNAME);
        browser.setValue('input[name="password"]', PASSWORD);
        browser.click('input[class="right center"]');
        browser.click('button[id="allow_authentication"]');
        browser.pause(1000);
    });

    it('it should test movie item', () => {
        browser.click('a[href="#/home/popular"]');

        for (let i = 1; i < 5; i++) {
            const item = ('//div[' + i + ']/div/a/div');
            const title = browser.getText(item);

            console.log('+++++ ' + title);
            browser.click('//div[' + i + ']/div/a');
            browser.pause(500);

            const filmName = browser.getText('div[class="title"]');
            assert.equal(title, filmName);

            const starButton = 'span[class="vue-star-rating-pointer vue-star-rating-star"]';
            browser.click(starButton);
            browser.back();
        }
    });

    it('it should test scroll', () => {
        const moveElement = '//div[20]/div/a/div';

        browser.moveToObject(moveElement);
        browser.pause(1000);
    });

    it('it should logout user', () => {
        const logoutBtn = 'button[class="btn btn-secondary btn-sm"]';
        browser.click(logoutBtn);
        chai.expect(browser.getUrl()).to.contain("login");
    })
});