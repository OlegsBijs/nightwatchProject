module.exports = {
  src_folders: ['tests'],
  webdriver: {
      start_process: true,
      port: 4444
  },
  test_settings: {
      default: {
          desiredCapabilities: {
              browserName: 'chrome'
          },
          webdriver: { server_path: require('chromedriver').path },

          "test_workers": {
            "enabled": true,
            "workers": "auto"
            }
      },
      firefox: {
          desiredCapabilities: {
              browserName: 'firefox'
          },
          webdriver: { server_path: require('geckodriver').path }
      }
  }
};