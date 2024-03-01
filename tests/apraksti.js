module.exports = {
    'before': function (browser) {
        browser
            .url('https://github.com/login')
            .setValue('#login_field', 'TestUserOlegs')
            .setValue('#password', 'Parole123parole')
            .click('[name="commit"]');
    },

    'Pārbaude vai visi tēmu apraksti nepārsniedz 500 rakstzīmes': function (client) {
        client
            .url('https://github.com/topics')
            .waitForElementVisible('.py-4', 5000)
            .elements('css selector', '.py-4', function (result) {
                result.value.forEach(function (element, index) {
                    client
                        .click('.py-4:nth-child(' + (index + 1) + ')')
                        .waitForElementVisible('.markdown-body.f5.mb-2', 5000)
                        .getText('.markdown-body.f5.mb-2 p', function (result) {
                            let description = result.value.trim();
                            const maxLength = 500;
                            if (description.length > maxLength) {
                                let lengthExceeded = description.length > maxLength;
                                client.assert.equal(
                                    lengthExceeded,
                                    true,
                                    'Apraksts nr.' +
                                        index +
                                        ' pārsniedz ' +
                                        maxLength +
                                        ' rakstzīmes'
                                );
                            } else {
                                let lengthExceeded = description.length > maxLength;
                                client.assert.equal(
                                    lengthExceeded,
                                    false,
                                    'Apraksts nr.' +
                                        index +
                                        ' nepārsniedz ' +
                                        maxLength +
                                        ' rakstzīmes'
                                );
                            }
                        })
                        .back();
                });
            });
    },

    'after': function (browser) {
        // Izeja pēc testu beigšanas
        browser.url('https://github.com/logout');
    }
};
