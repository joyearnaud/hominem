const dateTimeFormats = require('../src/formats/dateTimeFormats.js')

module.exports = {
  use: 'gridsome-plugin-i18n',
  options: {
    locales: [      
      'fr',
      'en',
    ],
    // defaultLocale: 'fr',
    fallbackLocale: 'en', // fallback language
    // defaultLocale: 'fr', // default language
    enablePathRewrite: false, // rewrite path with locale prefix, default: true
    rewriteDefaultLanguage: true, // rewrite default locale, default: true
    messages: {
      // 'fr': require('../src/locales/fr.json'), // Messages files
      // 'en': require('../src/locales/en.json'),
    },
    dateTimeFormats,
  },
}