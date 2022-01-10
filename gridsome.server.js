// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addContentType }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })

  api.loadSource(actions => {
    // actions.addSchemaResolvers({
    //   Skill: {
    //     id: {
    //       type: 'ID!',
    //       resolve(obj) {
    //         return `${obj.name}`
    //       }
    //     }
    //   }
    // })

    actions.addSchemaTypes(
      `
      type Experience implements Node @infer {

        info: Info,
      }
      type Info {
        desc: String!
        skills: [Skill] @reference(by: "name")
        keywords: [Keyword]
      }
      type Keyword {
        id: ID!
        name: String!
        note: Int,
      }
      `
    );

    // Add nodes to collections: https://gridsome.org/docs/data-store-api/#add-nodes-to-collections
    const test = actions.addCollection({
      typeName: 'test'
    });

    test.addNode({
      title: 'My first blog post',
      date: '2018-11-02',
      customField: [
        {
          name: {local:"toto", interna: "tttt"}
        },
        {
          name: {local:"tata", interna: "eeee"}
        }
    ]
    });

    const experiences = actions.addCollection('Experience');
    const skills = actions.addCollection('Skill');
    // makes all ids in the `tags` field reference a `Tag`
    experiences.addReference('skills', 'Skill');
  })

}
