<template>
  <Layout>
    <br />
    <g-link :to="$tp('/thought/')" class="link">
      &larr; {{ $t("back") }}</g-link
    >
    <div class="title">
      <h1>{{ $page.thought.title }}</h1>

      <p class="date">
        {{ $d(new Date($page.thought.date), "short") }} |
        {{ $page.thought.timeToRead }} {{ $t("min") }} {{ $t("read") }}
      </p>

      <p>{{ $page.thought.description }}</p>

      <div
        class="translation"
        v-for="item in $page.thought.relateTo"
        :key="item.name"
      >
        <g-image class="icon" src="~/assets/translate.png" />
        <g-link class="icon-link" :to="$tp(item.path)">{{ item.lang }}</g-link>
      </div>
    </div>

    <b-container fluid="sm">
      <b-row>
        <b-col cols="11" class="content">
          <p class="content-text" v-html="$page.thought.content" />
        </b-col>
      </b-row>
    </b-container>

    <Vssue :title="$page.thought.id.split('_')[0]" />
  </Layout>
</template>

<script>
import { mounted } from "vuewordcloud";
export default {
  metaInfo() {
    return {
      title: this.$page.thought.title,
      meta: [
        {
          name: "author",
          content: this.$t("author.name"),
        },
        {
          name: "description",
          content:
            this.$page.thought.title + ": " + this.$page.thought.description,
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
  async mounted() {},
};
</script>

<page-query>
query Thought ($path: String!) {
   thought: thought (path: $path) {
    id
    title
    description
    content
    date (format: "D MMMM YYYY")
    relateTo {title path lang}
    timeToRead
  }
}
</page-query>

<style scoped>
.title {
  text-align: center;
  font-size: 2em;
  line-height: 1.4em;
  padding: 1em 0;
  font-family: "Stylish";
}

.date {
  font-size: 0.6em;
  font-weight: 400;
}

.relateto {
  text-align: center;
  min-width: 3em;
  padding-top: 0.3em;
  margin-bottom: 1em;
}

.relateto-row {
  max-width: 30em;
}
.content {
  min-width: 200px;
  flex-grow: 2;
}
.content-text {
  text-align: justify;
  text-justify: inter-word;
}

.gg-arrow-long-right {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 2));
  border-top: 0.9em solid transparent;
  border-bottom: 0.9em solid transparent;
  box-shadow: inset 0 0 0 10px;
  height: 1em;
}
.gg-arrow-long-right::after {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 5px;
  height: 5px;
  border-top: 1px solid;
  border-right: 1px solid;
  transform: rotate(45deg);
  right: 0;
  bottom: -0.15em;
}

.translation {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em;
}

.translation .icon {
  width: 1.6em;
  -webkit-filter: invert(var(--reverted-color));
  filter: invert(var(--reverted-color));
}
.translation .icon-link {
  margin-left: 0.2em;
  padding: 0.1em;
  color: var(--link-color);
  text-decoration: underline;
  font-size: 1.5em;
  font-weight: 500;
}

.translation .icon-link:hover {
  margin-left: 0.2em;
  padding: 0.1em;
  color: var(--accent-color);
  text-decoration: none;
  font-size: 1.5em;
  font-weight: 500;
}

.translation a {
  border: 2px dashed var(--border-color);
  border-radius: 7px;
  padding: 0.16em;
  color: var(--link-color);
  text-decoration: none;
}
</style>
