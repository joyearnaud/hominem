<template>
  <header class="header">
    <h1 class="site-name" v-html="landing" />
    <span class="breath">
      <BreathAnimation :label="page" :hover="false" />
    </span>
    <hr class="round" />
  </header>
</template>

<script>
import BreathAnimation from "@/components/BreathAnimation";
export default {
  props: ["page"],
  components: {
    BreathAnimation,
  },
  data() {
    return {
      landing: "'Dev' in Progress'",
    };
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
}
</style>
