<template>
  <Layout>
    <header class="header">
      <h1 v-html="$page.metadata.siteName" />
      <h2>experience</h2>
    </header>
    <section class="experience">
      <ExperienceList
        v-for="edge in $page.allExperience.edges"
        :key="edge.node.id"
        :experience="edge.node"
      />
    </section>
  </Layout>
</template>

<script>
import ExperienceList from "@/components/ExperienceList";

export default {
  components: {
    ExperienceList,
  },
  metaInfo: {
    title: "A simple CV",
  },
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allExperience(sort: [{ by: "datestart" }]) {
    edges {
      node {
        id
        client
        path
        project
        role
        timeToRead
        description
        datestart(format: "D MMMM YYYY")
        dateend(format: "D MMMM YYYY")
        skills {
          id
          name
          path
        }
        keywords {
          name
          note
        }
        content
      }
    }
  }
  allSkill {
    edges {
      node {
        id
        name
        categorie
        level
        datestart
        dateend
        belongsTo {
          totalCount
          edges {
            node {
              ... on Experience {
                id
                client
                path
              }
            }
          }
        }
      }
    }
  }
}
</page-query>

<style>
.header {
  font-family: "Stylish";
  font-size: 35px;
  text-align: center;
  line-height: 1.4em;
  padding: 0.7em;
}

.header h2 {
  font-weight: 200;
  font-size: 35px;
}
</style>
