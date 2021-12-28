<template>
  <Layout>
    <header class="header">
      <h1 v-html="$page.metadata.siteName" />
      <h2 v-html="$page.metadata.about" />
    </header>
    <section class="about"></section>
  </Layout>
</template>

<script>
import PostList from "@/components/PostList";

export default {
  components: {
    PostList,
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
    about
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
