<template>
  <div class="header">
    <h1 class="d-inline-block site-name" v-html="landing" />
    <TranslateVue
      @change="translation('translate', $event)"
      class="d-inline-block btn float-right translate"
    />

    <span class="breath">
      <BreathAnimation :label="page" :hover="false" />
    </span>
    <hr class="round" />
  </div>
</template>

<script>
import BreathAnimation from "@/components/BreathAnimation";
import TranslateVue from "./Translate.vue";

export default {
  props: ["page"],
  components: {
    BreathAnimation,
    TranslateVue,
  },
  data() {
    return {
      landing: "Dev' in Progress",
    };
  },
  methods: {
    translation(message, event) {
      this.$emit("change", event);
    },
  },
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</page-query>

<style scoped>
.header {
  text-align: center;
}

.round {
  margin-top: -6vmin;
  margin-bottom: 6vmin;
  margin-left: 6vmin;
  margin-right: 6vmin;
}

.site-name {
  font-family: "Stylish";
  text-transform: uppercase;
  letter-spacing: 0.7vmin;
  text-align: center;
  width: auto;
}

.translate {
  margin-bottom: 1em;
  padding: 0px;
  font-size: 2em;
}
</style>
