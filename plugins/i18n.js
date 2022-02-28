const dateTimeFormats = require('../src/formats/dateTimeFormats.js')

module.exports = {
  use: 'gridsome-plugin-i18n',
  options: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    messages: {
      en: require('../src/locales/en.json'),
      fr: require('../src/locales/fr.json'),
    },
    dateTimeFormats,
  },
}