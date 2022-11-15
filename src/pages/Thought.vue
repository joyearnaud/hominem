<template>
  <Layout>
    <Landing :page="$t(title)" @change="translation('translate', $event)" />
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
  metaInfo: {
    title: "Blog",
  },
  data() {
    return {
      title: "thoughts",
      lang: "",
      thoughts: [],
    };
  },
  async mounted() {
    this.lang = this.$root.lang ? this.$root.lang : this.$i18n.locale;
    this.changeLang(this.lang);
  },
  methods: {
    translation(message, event) {
      this.$root.lang = event;
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
