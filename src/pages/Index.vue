<template>
  <Layout>
    <PageHeader :page="$t('welcome')" />
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
  allExperience{
    edges{
      node{
        keywords{
          skill{id name path}
          versions
        }
      }
    }
  }
}
</page-query>

<style></style>
