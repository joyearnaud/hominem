<template>
  <div class="list">
    <div>
      <b-table
        striped
        hover
        responsive="sm"
        label-sort-asc=""
        label-sort-desc=""
        label-sort-clear=""
        :items="items"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        show-empty
        small
      >
        <!-- A custom formatted header cell for field 'name' -->
        <template #head(skill)="data">
          <span class="head head-skill">{{ data.label.toUpperCase() }}</span>
        </template>

        <template #head(category)="data">
          <span class="head head-category">{{ data.label.toUpperCase() }}</span>
        </template>

        <template #head(keywords)="data">
          <span class="head head-keywords">{{ data.label.toUpperCase() }}</span>
        </template>

        <!-- Custom formatted column -->
        <template #cell(skill)="data">
          <span class="col col-skill">
            <g-link :to="data.item.path">{{
              data.value.toUpperCase()
            }}</g-link></span
          >
        </template>

        <template #cell(category)="data">
          <span class="col col-category">{{ data.value }}</span>
        </template>

        <template #cell(keywords)="data">
          <span class="col col-keywords">{{ data.value }}</span>
        </template>
      </b-table>
      <div>
        Sorting By: <b>{{ sortBy }}</b
        >, Sort Direction:
        <b>{{ sortDesc ? "Descending" : "Ascending" }}</b>
      </div>
    </div>
    <!-- <div v-for="skill in skillMap">
      <h2>{{ skill[0] }}</h2>
      <div v-for="version in skill[1].versions">
        <span>{{ version }}</span>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillMap: null,
      sortBy: "category",
      sortDesc: false,
      fields: [
        { key: "skill", sortable: true },
        { key: "category", sortable: true },
        { key: "keywords", sortable: false },
      ],
      items: [],
    };
  },
  methods: {
    onRowClicked(item, index, event) {
      this.$router.push(item.path).catch(() => {});
    },
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
      const res = [];
      skillMap.forEach((value, key, map) => {
        res.push({
          skill: key,
          path: value.path,
          category: value.category.name,
          keywords: value.versions.join(", "),
        });
      });

      this.items = res;

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
            skill{id name category {name} path}
            versions
          }
        }
      }
    }
  }
  </static-query>

<style scoped>
#list {
  background-color: red;
}

.head {
  color: var(--text-color);
}
.col {
  color: var(--text-color);
}

.col-skill {
  all: initial;
  font-weight: bold;
  color: var(--border-color);
}
</style>
