module.exports = {
    test: client => {
        client
            .url('https://github.com/login')
            .waitForElementVisible('#login', 10 * 1000)
            .waitForElementVisible('#login_field', 10 * 1000)
            .setValue('#login_field', 'dadsa@test.com')
            .setValue('#password', 'password12345')
            .click('[type="submit"]')
            .waitForElementVisible('#js-flash-container', 10 * 1000);
    }
};
