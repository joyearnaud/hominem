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
      title: "curriculum vitae (CV)",
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

<style></style>
