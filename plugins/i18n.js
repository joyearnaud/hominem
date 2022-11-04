const dateTimeFormats = require('../src/formats/dateTimeFormats.js')

module.exports = {
  use: 'gridsome-plugin-i18n',
  options: {
    locales: ['fr', 'en'],
    // defaultLocale: 'fr',
    messages: {
      en: require('../src/locales/en.json'),
      fr: require('../src/locales/fr.json'),
    },
    dateTimeFormats,
  },
}