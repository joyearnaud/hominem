<template>
  <Layout>
    <section class="home">
      <Landing :page="$t('page.welcome.name')" />
      <p>
        {{ $t("page.welcome.welcome-message") }}
      </p>
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
import Landing from "@/components/Landing";
import SkillMap from "@/components/SkillMap";
import SkillList from "@/components/SkillList";
import Wordcloud from "@/components/Wordcloud";

export default {
  components: {
    Landing,
    SkillMap,
    SkillList,
    Wordcloud,
  },
  metaInfo() {
    return {
      title: this.$t("page.welcome.title"),
      meta: [
        {
          name: "author",
          content: this.$t("author.name"),
        },
        {
          name: "description",
          content: this.$t("page.welcome.description"),
        },
        {
          name: "robots",
          content: "FOLLOW", //FOLLOW,INDEX,NOFOLLOW,NOINDEX
        },
      ],
    };
  },
  data() {
    return {};
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
