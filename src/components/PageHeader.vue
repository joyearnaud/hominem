<template>
  <header class="header">
    <h1 class="site-name" v-html="$page.metadata.siteName" />
    <BreathAnimation :label="page" :hover="false" />
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
.breathe {
  margin-top: 1em;
}

.header h2 {
  font-weight: 200;
  font-size: 35px;
  font-family: "Stylish";
  text-decoration: inherit;
  color: var(--border-color);
  transition: color 2s;
  letter-spacing: 2px;
  font-size: 0.8em;
}

.site-name {
  font-family: "Stylish";
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
}
</style>
