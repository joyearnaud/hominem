<template>
  <Layout>
    <PageHeader :page="title" />
    <section class="home"></section>
  </Layout>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import ThoughtList from "@/components/ThoughtList";

export default {
  components: {
    PageHeader,
    ThoughtList,
  },
  metaInfo: {
    title: "A simple blog",
  },
  data() {
    return {
      title: "welcome",
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
}
</page-query>

<style>
</style>
