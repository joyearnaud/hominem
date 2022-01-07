// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome Blog',
  siteDescription: 'A simple blog designed with Gridsome',
  templates: {
    Post: '/blog/:title',
    Experience: '/experience/:client',
    Skill: '/skill/:name',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
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
