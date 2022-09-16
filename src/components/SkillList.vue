<template>
  <section>
    <div v-for="skill in skillMap">
      <h2>{{ skill[0] }}</h2>
      <div v-for="version in skill[1].versions">
        <span>{{ version }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skillMap: null,
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
                versions: newVersions,
              });
            } else {
              skillMap.set(k.skill.name, {
                path: k.skill.path,
                versions: k.versions.sort(),
              });
            }
          }
        });
      });
      console.log(skillMap.keys(), "skillMap");
      this.skillMap = skillMap;
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
            skill{id name path}
            versions
          }
        }
      }
    }
  }
  </static-query>

<style scoped>
#word-cloud {
  margin-top: 15em;
  margin-bottom: 10em;
  width: 100%;
}
</style>
