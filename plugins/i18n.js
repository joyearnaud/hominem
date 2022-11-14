const dateTimeFormats = require('../src/formats/dateTimeFormats.js')

module.exports = {
  use: 'gridsome-plugin-i18n',
  options: {
    locales: [      
    'it-it',
    'fr-fr',
    'de-de',
    'en-gb',
    'en-us',],
    pathAliases: { // path segment alias for each locales
      'it-it': 'it',
      'fr-fr': 'fr',
      'de-de': 'de',
      'en-gb': 'en',
      'en-US': 'en',
    },
    // defaultLocale: 'fr',
    fallbackLocale: 'fr-fr', // fallback language
    defaultLocale: 'fr-fr', // default language
    enablePathRewrite: true, // rewrite path with locale prefix, default: true
    rewriteDefaultLanguage: true, // rewrite default locale, default: true
    messages: {
      'it-it': require('../src/locales/en.json'), // Messages files
      'fr-fr': require('../src/locales/fr.json'),
      'de-de': require('../src/locales/en.json'),
      'en-gb': require('../src/locales/en.json'),
      'en-us': require('../src/locales/en.json'),
    },
    dateTimeFormats,
  },
}