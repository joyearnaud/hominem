<template>
  <vue-word-cloud
    :words="words"
    :color="
      ([, weight]) =>
        weight > 10
          ? 'var(--accent-color)'
          : weight > 5
          ? 'var(--line-color)'
          : 'var(--text-color)'
    "
    :spacing="settings.spacing"
  >
    <template slot-scope="{ text, weight, word }" class="link">
      <div :title="weight">
        <g-link :to="word[2]">{{ text }}</g-link>
      </div>
    </template>
  </vue-word-cloud>
</template>

<script>
import VueWordCloud from "vuewordcloud";

export default {
  components: {
    [VueWordCloud.name]: VueWordCloud,
  },
  data() {
    return {
      words: [],
      settings: {
        spacing: 2,
      },
    };
  },
  async mounted() {
    try {
      const skillMap = new Map();
      const edges = JSON.parse(
        JSON.stringify(this.$static.allExperience.edges)
      );
      edges.forEach((e) => {
        const keywords = e.node.keywords;
        keywords.forEach((k) => {
          if (k.skill && k.skill.id) {
            if (skillMap.get(k.skill.name)) {
              let oldskill = skillMap.get(k.skill.name);
              let oldversions = oldskill.versions;
              let newVersions = [
                ...new Set(oldversions.concat(k.versions)),
              ].sort();
              skillMap.set(k.skill.name, {
                path: k.skill.path,
                category: k.skill.category,
                versions: newVersions,
              });
            } else {
              skillMap.set(k.skill.name, {
                path: k.skill.path,
                category: k.skill.category,
                versions: k.versions.sort(),
              });
            }
          }
        });
      });

      skillMap.forEach((value, key, map) => {
        const versions = value.versions;
        const vlength = versions.length;
        const path = value.path;
        this.words.push([key, vlength, path]);
      });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<static-query>
  query {
    allExperience{
      edges{
        node{
          keywords{
            skill{id name category {name} path}
            versions
          }
        }
      }
    }
  }
  </static-query>

<style scoped>
.link {
  cursor: pointer;
  text-decoration: none;
}
</style>
