<template>
  <Layout>
    <br />
    <g-link to="/experience" class="link"> &larr; Go Back</g-link>
    <div class="skill-title">
      <h1>{{ $page.skill.name }}</h1>
      <p>{{ $page.skill.categorie }}</p>
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
      <h2>{{ refererence.label.title }}</h2>
      <ul>
        <li v-for="edge in $page.skill.belongsTo.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">{{ edge.node.client }}</g-link>
        </li>
      </ul>
      <span
        >{{ refererence.label.total }}:
        {{ $page.skill.belongsTo.totalCount }}</span
      >
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      skill: {
        label: {
          level: {
            title: "skill confidence",
          },
        },
      },
      refererence: {
        label: {
          title: "Reference in experience",
          total: "Total",
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
    categorie
    level
    datestart(format: "D MMMM YYYY")
    dateend(format: "D MMMM YYYY")
    content
    timeToRead
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
