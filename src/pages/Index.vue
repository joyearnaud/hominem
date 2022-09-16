<template>
  <Layout>
    <PageHeader :page="$t('welcome')" />
    <section class="home">
      <section class="experience">
        <SkillMap />
      </section>
    </section>
  </Layout>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import SkillMap from "@/components/SkillMap";

export default {
  components: {
    PageHeader,
    SkillMap,
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
