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
  padding-top: 0em;
  padding-bottom: 2em;
}

.header h1 {
  font-weight: 200;
  font-size: 35px;
  font-family: "Stylish";
  text-decoration: inherit;
  letter-spacing: 2px;
  font-size: 1em;
  font-weight: bold;
  text-transform: capitalize;
}

.header h2 {
  font-weight: 200;
  font-size: 35px;
  font-family: "Stylish";
  text-decoration: inherit;
  color: var(--border-color);
  transition: color 2s;
  letter-spacing: 2px;
  font-size: 0.8em;
}
</style>
