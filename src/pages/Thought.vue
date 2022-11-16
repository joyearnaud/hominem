<template>
  <Layout>
    <Landing
      :page="$t('page.thoughts.name')"
      @change="translation('translate', $event)"
    />
    <section class="thought">
      <ThoughtList
        v-for="edge in thoughts"
        :key="edge.node.id"
        :thought="edge.node"
      />
    </section>
  </Layout>
</template>

<script>
import Landing from "@/components/Landing";
import ThoughtList from "@/components/ThoughtList";
import TranslateVue from "../components/Translate.vue";

export default {
  components: {
    Landing,
    ThoughtList,
    TranslateVue,
  },
  metaInfo() {
    return {
      title: this.$t("page.thoughts.name"),
      meta: [
        {
          name: "author",
          content: this.$t("author.name"),
        },
        {
          name: "description",
          content: this.$t("page.thoughts.description"),
        },
        {
          name: "robots",
          content: "FOLLOW", //FOLLOW,INDEX,NOFOLLOW,NOINDEX
        },
      ],
    };
  },
  data() {
    return {
      lang: "",
      thoughts: [],
    };
  },
  async mounted() {
    this.changeLang(this.$i18n.locale);
  },
  methods: {
    translation(message, event) {
      this.changeLang(event);
    },
    changeLang(lang) {
      this.thoughts = this.$page.allThought.edges.filter(({ node: t }) => {
        return t.lang == lang;
      });
    },
  },
};
</script>

<page-query>
  query {
    allThought {
      totalCount
      edges {
        node {
          id
          lang
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
