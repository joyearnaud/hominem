// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

const i18n = require("./plugins/i18n");

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Dev\' in Progress',
  siteDescription: 'Arnaud Joye - Fullstack engineer - Paris et périphérie',
  templates: {
    Thought: '/thought/:title',
    Experience: '/experience/:project',
    Skill: '/skill/:name',
    Category: '/category/:name'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Thought',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/experiences/**/*.md',
        typeName: 'Experience',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/skills/**/*.md',
        typeName: 'Skill',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/categories/**/*.md',
        typeName: 'Category',
      }
    },
    i18n,
    {
      use: 'gridsome-plugin-robots',
      options: {
        host: 'https://cv.arnaudjoye.fr/fr',
        sitemap: 'https://cv.arnaudjoye.fr/fr/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
}
