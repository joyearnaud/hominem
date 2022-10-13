<template>
  <Layout>
    <section class="home">
      <PageHeader :page="$t('welcome')" />
      <div>
        <div class="skillmap container-sm">
          <SkillMap class="skillmap" />
        </div>
        <div class="skilllist container-sm">
          <SkillList />
        </div>
      </div>
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
.skillmap {
  margin-top: 15vh;
  height: 50vh;
}
.skilllist {
  margin-top: 15vh;
}
</style>
