module.exports = {
    'before': function (browser) {
        // Log in ar derīgu lietotājvārdu un paroli pirms testi tiek veikti
        browser
            .url('https://github.com/login')
            .setValue('#login_field', 'TestUserOlegs')
            .setValue('#password', 'Parole123parole')
            .click('[name="commit"]');
    },

    'after': function (browser) {
        // Log out pēc testu veikšanas
        browser.url('https://github.com/logout');
    },

    'Repository izveide': function (browser) {
        browser
            .url('https://github.com/new')
            .setValue('#react-aria-2', 'test-repo')
            .setValue('#react-aria-3', 'Test repository for Nightwatch.js')
            .pause(2000)
            .click('.fAcoGo')
            .pause(2000)
            .url('https://github.com')
            .waitForElementVisible('a[href="/TestUserOlegs/test-repo"]', 10 * 1000);
    },

    'Repository izdzēšana': function (browser) {
        browser
            .url('https://github.com/TestUserOlegs/test-repo/settings')
            .click('.js-repo-delete-button')
            .pause(2000)
            .click('.js-repo-delete-proceed-button')
            .pause(2000)
            .click('.js-repo-delete-proceed-button')
            .pause(2000)
            .setValue('#verification_field', 'TestUserOlegs/test-repo')
            .pause(2000)
            .click('.js-repo-delete-proceed-button');
        browser.assert.urlContains('/TestUserOlegs');
    }
};
