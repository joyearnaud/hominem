<template>
  <!-- <select v-model="currentLocale" @change="localeChanged">
    <option v-for="locale in availableLocales" :key="locale" :value="locale">
      {{ locale }}
    </option>
  </select> -->
  <select v-model="$i18n.locale" @change="localeChanged">
    <option
      v-for="locale in $i18n.availableLocales"
      :key="locale"
      :value="locale"
    >
      <!-- <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang"> -->
      {{ locale }}
    </option>
  </select>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data: function () {
    return {};
  },
  methods: {
    async localeChanged() {
      console.log(this.$root.$i18n.locale, "this.$i18n.root");
      console.log(this.$i18n.locale, "this.$i18n.locale");
      console.log(this.$root.lang, "root lang");
      console.log("---");

      this.$root.lang = this.$i18n.locale;

      this.$router.push({
        path: this.$tp(this.$route.path, this.$i18n.locale, true),
      });
    },
  },
};
</script>
