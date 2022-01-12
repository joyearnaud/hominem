<template>
  <Layout>
    <header class="header">
      <h1 v-html="$page.metadata.siteName" />
      <h2>thought</h2>
    </header>
    <section class="thought">
      <ThoughtList
        v-for="edge in $page.allThought.edges"
        :key="edge.node.id"
        :thought="edge.node"
      />
    </section>
  </Layout>
</template>

<script>
import ThoughtList from "@/components/ThoughtList";
export default {
  components: {
    ThoughtList,
  },
  metaInfo: {
    title: "A simple blog",
  },
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allThought {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
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
