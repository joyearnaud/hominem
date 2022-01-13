<template>
  <header class="header">
    <h1 v-html="$page.metadata.siteName" />
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
.header {
  font-family: "Stylish";
  font-size: 35px;
  text-align: center;
  line-height: 1.4em;
  padding-top: 0em;
  padding-bottom: 2em;
}

.header h1 {
  font-weight: 200;
  font-size: 35px;
  font-family: "Stylish";
  text-decoration: inherit;
  letter-spacing: 2px;
  font-size: 1em;
  font-weight: bold;
  text-transform: capitalize;
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
</style>
