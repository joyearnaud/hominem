<template>
  <span>
    <select v-model="$i18n.locale" @change="localeChanged" class="translate">
      <!-- <option
        v-for="locale in $i18n.availableLocales"
        :key="locale"
        :value="locale"
      >
        {{ locale }}
      </option> -->
      <option value="en">🇬🇧</option>
      <option value="fr">🇫🇷</option>
    </select>
  </span>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data: function () {
    return {};
  },
  methods: {
    async localeChanged() {
      this.$router.push({
        path: this.$tp(this.$route.path, this.$i18n.locale, true),
      });

      this.$emit("change", this.$i18n.locale);
    },
  },
};
</script>

<style scoped>
.translate {
  background-color: var(--bkg-color);
  border-color: var(--bkg-color);
  color: var(--text-color);
  transition: 0.3s;
  padding: 0px;
  margin: 0px;
}

select {
  appearance: none;
}
</style>
