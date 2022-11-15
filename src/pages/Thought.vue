<template>
  <Layout>
    <Landing :page="$t(title)" />
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

export default {
  components: {
    Landing,
    ThoughtList,
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
    // console.log(this.$i18n.locale, "locale");
    // console.log(this.$root.lang, "root lang");
    // console.log(
    //   this.$root.lang ? this.$root.lang : this.$i18n.locale,
    //   "choice"
    // );
    this.lang = this.$root.lang ? this.$root.lang : this.$i18n.locale;
    console.log(this.lang, "lang");
    this.thoughts = this.$page.allThought.edges.filter(({ node: t }) => {
      console.log(t, "t");
      console.log(t.lang == this.lang, "=");
      return t.lang == this.lang;
    });
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
