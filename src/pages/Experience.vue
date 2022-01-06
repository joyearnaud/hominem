<template>
  <Layout>
    <header class="header">
      <h1 v-html="$page.metadata.siteName" />
      <h2 v-html="$page.metadata.experience" />
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
    experience
  }
  allExperience (sort: [{by: "datestart"}]) { 
    edges {
      node {
        id
				fileInfo {
          extension
          directory
          path
          name
        }
        client
        project
        role
        timeToRead
        description
        datestart(format: "D MMMM YYYY")
        dateend(format: "D MMMM YYYY")
        keyword
        path
        content
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
