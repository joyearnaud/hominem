<template>
  <Layout>
    <br />
    <g-link :to="$tp('/experience/')" class="link">
      &larr; {{ $t("back") }}</g-link
    >

    <div class="experience-title">
      <h1>
        <span v-html="$page.experience.client" />
        <span> - </span>
        <span v-html="$page.experience.project" />
      </h1>
      <h2 v-html="$page.experience.role" />
      <p class="experience-date">
        {{ $d(new Date($page.experience.datestart), "short") }} |
        {{ $d(new Date($page.experience.dateend), "short") }}
      </p>
    </div>

    <div class="container-fluid experience-project">
      <p class="label" v-html="$page.experience.description" />
    </div>

    <div class="container-fluid experience-content">
      <p v-html="$page.experience.content" />
    </div>

    <div class="container-fluid experience-keywords">
      <h3>{{ $t("keywords") }}</h3>
      <ul>
        <li v-for="k in $page.experience.keywords" :key="k.id">
          <p>
            <g-link
              v-if="k.skill"
              class="skill-name navlink badge"
              :to="$tp(k.skill.path)"
              >{{ k.skill.name }}</g-link
            >
            <span v-else class="skill-name badge">{{ k.name }}</span>
            <span v-for="version in k.versions" :key="version.id">
              <span class="skill-badge badge">
                {{ version }}
              </span>
            </span>
            <span>{{ k.note }}</span>
          </p>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script>
export default {
  async mounted() {
    console.log(this.$page.experience);
  },
  metaInfo() {
    return {
      title: this.$t("template.experience.description"),
      meta: [
        {
          name: "author",
          content: this.$t("author.name"),
        },
        {
          name: "description",
          content: this.$t("template.experience.description"),
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
query Experience ($path: String!) {
   experience: experience (path: $path) {
      id
      client
      project
      role
      timeToRead
      description
      datestart(format: "YYYY-MM-DD")
      dateend(format: "YYYY-MM-DD")
      path
      content
      keywords {
        name
        skill {
          id
          name
          path
          category {id name}
          content
          excerpt
          level
          datestart
          dateend
          timeToRead
        }
        versions
        note
      }
  }
}
</page-query>

<style scoped>
.experience-title {
  text-align: center;
  font-size: 30px;
  line-height: 1em;
  padding: 1em 0.5em 0.5em 0.5em;
  font-family: "Stylish";
}

.experience-title h1 {
  font-family: "IBM Plex Sans Roman";
  text-transform: uppercase;
}

.experience-title h2 {
  font-family: "IBM Plex Sans Roman";
  text-transform: lowercase;
  color: var(--border-color);
  transition: background 1s;
}

.experience-date {
  font-size: 0.6em;
  font-weight: 400;
}

.experience-project {
  font-size: 2em;
  line-height: 1em;
  font-family: "IBM Plex Sans Roman";
  display: inline-block;
}

.experience-project .label {
  background-color: var(--text-color);
  color: var(--bkg-color);
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-top: 0.1em;
  padding-bottom: 0.1em;
  margin-right: 0.5em;
  transition: background 1s;
  text-align: center;
  border-radius: 20px;
}

.experience-project .label:hover {
  background-color: var(--border-color);
  transition: background 1s;
}

.experience-content {
  font-size: 1em;
}

.skill-badge {
  font-size: 0.7em;
  font-family: "Lato", sans-serif;
  /*background-color: var(--text-color);*/
  color: var(--border-color);
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin-right: 0.5em;
  margin-top: 0.5em;
  transition: background 1s;
}

.skill-badge:hover {
  background-color: var(--text-color);
}

.skill-name {
  background-color: var(--border-color);
  color: var(--bkg-color);
  font-family: "Lato", sans-serif;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin-right: 0.5em;
  margin-top: 0.5em;
  transition: background 1s;
}
</style>
