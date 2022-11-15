<template>
  <select v-model="$i18n.locale" @change="localeChanged">
    <option
      v-for="locale in $i18n.availableLocales"
      :key="locale"
      :value="locale"
    >
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
      this.$root.lang = this.$i18n.locale;

      this.$router.push({
        path: this.$tp(this.$route.path, this.$i18n.locale, true),
      });

      this.$emit("change", this.$root.lang);
    },
  },
};
</script>
