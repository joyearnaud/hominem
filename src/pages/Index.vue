<template>
  <Layout>
    <section class="home">
      <Landing :page="$t('page.welcome.name')" />
      <p class="welcom-msg">
        {{ $t("page.welcome.welcome-message") }}
      </p>
      <hr />
      <div>
        <div class="wordcloud container-sm">
          <Wordcloud></Wordcloud>
        </div>
        <hr />
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
        {
          name: "og:title",
          content: this.$t("page.welcome.title"),
        },
        {
          name: "og:description",
          content: this.$t("page.welcome.description"),
        },
        {
          name: "og:image",
          content: this.$t("page.welcome.image"),
        },
        {
          name: "og:site_name",
          content: this.$t("page.welcome.name"),
        },
        {
          name: "og:locale",
          content: "fr_FR",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:title",
          content: this.$t("page.welcome.title"),
        },
        {
          name: "twitter:description",
          content: this.$t("page.welcome.description"),
        },
        {
          name: "twitter:image",
          content: this.$t("page.welcome.image"),
        },
        {
          name: "twitter:url",
          content: this.$t("page.welcome.url"),
        },
        {
          name: "twitter:site",
          content: "@arnaudjoye",
        },
        {
          name: "twitter:creator",
          content: "@arnaudjoye",
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

.welcom-msg {
  margin: 2em;
  text-align: justify;
}
</style>
