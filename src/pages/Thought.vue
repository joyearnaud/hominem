<template>
  <Layout>
    <Landing :page="$t(title)" />
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
import Landing from "@/components/Landing";
import ThoughtList from "@/components/ThoughtList";

export default {
  components: {
    Landing,
    ThoughtList,
  },
  metaInfo: {
    title: "Blog",
  },
  data() {
    return {
      title: "thoughts",
    };
  },
};
</script>

<page-query>
query($locale:String) {
  metadata {
    siteName
    siteDescription
  }
  allThought(filter: {lang: {eq: $locale}}) {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "YYYY-MM-DD")
        path
      }
    }

  }
}
</page-query>

<style></style>
