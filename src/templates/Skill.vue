<template>
  <Layout>
    <br />
    <g-link :to="$tp('/experience/')" class="link"> &larr; Go Back</g-link>
    <div class="skill-title">
      <h1>{{ $page.skill.name }}</h1>
      <p>{{ $page.skill.category.name }}</p>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped pgdefault"
          role="progressbar"
          :style="'width: ' + $page.skill.level + '%'"
        >
          {{ skill.label.level.title }}
        </div>
      </div>
    </div>
    <div class="skill-content">
      <p v-html="$page.skill.content" />
    </div>
    <div class="skill-belongsto">
      <br />
      <h3>{{ $t("skill.references.label") }}</h3>
      <ul>
        <li v-for="edge in $page.skill.belongsTo.edges" :key="edge.node.id">
          <g-link :to="$tp(edge.node.path)"
            >{{ edge.node.client }} - {{ edge.node.project }}</g-link
          >
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$t("template.skill.description"),
      meta: [
        {
          name: "author",
          content: this.$t("author.name"),
        },
        {
          name: "description",
          content: this.$t("template.skill.description"),
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
      skill: {
        label: {
          level: {
            title: "experience",
          },
        },
      },
    };
  },
};
</script>

<page-query>
query Skill($path: String!) {
  skill: skill(path: $path) {
    id
    path
    name
    category {id name}
    level
    datestart(format: "YYYY-MM-DD")
    dateend(format: "YYYY-MM-DD")
    content
    timeToRead
    belongsTo {
      totalCount
      edges {
        node {
          ... on Experience {
            id
            client
            project
            path
          }
        }
      }
    }
  }
}
</page-query>

<style>
.skill-title {
  text-align: center;
  font-size: 30px;
  line-height: 1.4em;
  padding: 2em 0;
  font-family: "Stylish";
}

.skill-date {
  font-size: 16px;
  font-weight: 400;
}

.skill-content {
  font-size: 20px;
}

.pgdefault {
  background-color: var(--border-color);
  transition: background 1s;
}
</style>
