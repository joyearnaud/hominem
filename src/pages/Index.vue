<template>
  <Layout>
    <section class="home">
      <PageHeader :page="$t('welcome')" />
      <div>
        <div class="wordcloud container-sm">
          <Wordcloud></Wordcloud>
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
import Wordcloud from "@/components/Wordcloud";

export default {
  components: {
    PageHeader,
    SkillMap,
    SkillList,
    Wordcloud,
  },
  metaInfo: {
    title: "Arnaud JOYE site",
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
.skilllist {
  margin-top: 5vh;
}

.wordcloud {
  margin-top: 5vh;
  height: 30vh;
}
</style>
