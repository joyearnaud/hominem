<template>
  <Layout>
    <header class="header">
      <h1 v-html="$page.metadata.siteName" />
      <h2 v-html="$page.metadata.siteDescription" />
    </header>
    <section class="experience">
      <ExperienceList
        v-for="edge in $page.allExperience.edges"
        :key="edge.node.id"
        :experience="edge.node"
      />
      </div>
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
  allExperience {
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
