<template>
  <Layout>
    <section class="home">
      <PageHeader :page="$t('welcome')" />
      <section class="experience">
        <div class="skillmap">
          <SkillMap class="skillmap" />
        </div>
        <div class="skilllist">
          <!-- <SkillList /> -->
        </div>
      </section>
    </section>
  </Layout>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import SkillMap from "@/components/SkillMap";
import SkillList from "@/components/SkillList";

export default {
  components: {
    PageHeader,
    SkillMap,
    SkillList,
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

<style scoped>
section .skillmap {
  padding-top: 10em;
  padding-bottom: 10em;
}
.skillmap {
  text-align: center;
}
</style>
