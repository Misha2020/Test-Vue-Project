var assert = require('assert');

import Page from './page.js';

const URL = 'http://localhost:8080';

class AuthPage extends Page {
    get username () { return $('#username') }
    get password () { return $('#password') }

    get apiInput () { return $('input[id="apiKeyInput"]') }
    get submitButton () { return $('button[class="btn btn-primary"]') }

    open() {
        super.open(URL);
    }

    getTitle() {
        var title = browser.getTitle();
        assert.equal(title, 'Films Info');
    }

    checkEnabled() {
        var isEnabledAPI = browser.isEnabled('input[id="apiKeyInput"]');
        console.log('API field is Enable' + isEnabledAPI);
        var isEnabledBtn = browser.isEnabled('button[class="btn btn-primary"]');
        console.log('Submit Button is enable' + isEnabledBtn);
    }
}

export default new AuthPage();