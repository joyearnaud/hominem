<template>
  <Layout>
    <Landing :page="$t('page.experiences.name')" />
    <section class="experience">
      <ExperienceList
        v-for="edge in $page.allExperience.edges"
        :key="edge.node.id"
        :experience="edge.node"
      />
    </section>
  </Layout>
</template>

<script>
import Landing from "@/components/Landing";
import ExperienceList from "@/components/ExperienceList";

export default {
  components: {
    Landing,
    ExperienceList,
  },
  metaInfo() {
    return {
      title: this.$t("page.experiences.title"),
      meta: [
        {
          name: "author",
          content: this.$t("author.name"),
        },
        {
          name: "description",
          content: this.$t("page.experiences.description"),
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
  allExperience(sort: [{ by: "datestart" }]) {
    edges {
      node {
        id
        client
        path
        project
        role
        timeToRead
        description
        datestart(format: "YYYY-MM-DD")
        dateend(format: "YYYY-MM-DD")
        skills {
          id
          name
          path
        }
        content
      }
    }
  }
  allSkill {
    edges {
      node {
        id
        name
        category {id name}
        level
        datestart
        dateend
        belongsTo {
          totalCount
          edges {
            node {
              ... on Experience {
                id
                client
                path
              }
            }
          }
        }
      }
    }
  }
}
</page-query>

<style scoped></style>
