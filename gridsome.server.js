// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const elements = [
  {
    name: 'home',
    desc: 'A simple blog designed with Gridsome'
  },
  {
    name: 'about',
    desc: 'about page'
  },
  {
    name: 'experience',
    desc: 'experience page'
  },
  {
    name: 'thoughts',
    desc: 'thoughts page'
  },

]

function addAllToMetadata (api, els) {
  els.forEach(el => {
    api.loadSource(async store => {
      store.addMetadata(el.name, el.desc)
    })
  });
}

module.exports = function (api) {
  addAllToMetadata(api, elements)

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })
}
