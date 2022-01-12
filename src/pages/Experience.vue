<template>
  <Layout>
    <PageHeader :page="title" />
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
import PageHeader from "@/components/PageHeader";
import ExperienceList from "@/components/ExperienceList";

export default {
  components: {
    PageHeader,
    ExperienceList,
  },
  metaInfo: {
    title: "A simple CV",
  },
  data() {
    return {
      title: "experience",
    };
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
</style>
