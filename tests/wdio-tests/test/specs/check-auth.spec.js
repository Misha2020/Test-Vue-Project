const URL = 'http://localhost:8080';

describe('check auth page', () => {
    it.skip('should have the right title', function () {
        browser.url(URL);
        var title = browser.getTitle();
        assert.equal(title, 'Films Info');
        var isEnabledAPI = browser.isEnabled('input[id="apiKeyInput"');
        console.log('API field is Enable' + isEnabledAPI);
        var isEnabledBtn = browser.isEnabled('button[class="btn btn-primary"]');
        console.log('Submit Button is enable' + isEnabledBtn);
    });
});