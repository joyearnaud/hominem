<template>
  <main class="layout" role="main">
    <Header />
    <slot />
    <Footer />
  </main>
</template>

<script>
import Header from "~/layouts/partials/Header";
import Footer from "~/layouts/partials/Footer";

export default {
  components: {
    Header,
    Footer,
  },
  async mounted() {
    console.log(this.$root.lang, "root lang");
    if (this.$root.lang) {
      this.$i18n.locale = this.$root.lang;
    } else {
      const pathArray = window.location.pathname.split("/");
      console.log(pathArray[1], "path");
      this.$i18n.locale = pathArray[1];
      this.$root.lang = pathArray[1];
    }
    // console.log(this.$root.$i18n.locale, "this.$i18n.root");
    // console.log(this.$i18n.locale, "this.$i18n.locale");
    // console.log(this.$tp(this.$route.path, this.$i18n.locale, true), "path");
    // this.$root.$i18n.locale = this.$root.lang;
    // this.$i18n.locale = this.$root.lang;
    // console.log(this.$router);
    // this.$i18n.locale = "fr";
    // this.$router.push({
    //   path: this.$tp(this.$route.path, this.$root.lang, true),
    // });
    // const newLocal = navigator.language.split("-")[0];
    // console.log(newLocal);
    // console.log(this.$i18n);
    // this.$i18n.locale = "en";
    // this.$router.push({
    //   path: this.$tp(this.$route.path, this.$i18n.locale, true),
    // });
  },
};
</script>

<style>
@font-face {
  font-family: "IBM Plex Sans Roman";
  src: local("IBM Plex"), url("../assets/IBMPlexSansVarRoman.ttf");
  font-display: swap;
}

:root {
  --text-color: #333;
  --border-color: #feae45;
  --bkg-color: white;
  --line-color: #00a672;
  --link-color: #7a5422;
  --accent-color: #ff1493;
  --reverted-color: 0;
}
:root [data-theme="sepia"] {
  --text-color: #433422;
  --border-color: #00a672;
  --bkg-color: #f1e7d0;
  --line-color: #5a64c4;
  --link-color: #015238;
  --accent-color: #ff1493;
  --reverted-color: 0;
}

:root [data-theme="dark"] {
  --text-color: #ffffffcb;
  --border-color: #5a64c4;
  --bkg-color: #030200;
  --line-color: #fecd43;
  --link-color: #587af7;
  --accent-color: #ff1493;
  --reverted-color: 1;
}

body {
  min-width: 24em;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  border: 15px solid var(--border-color);
  min-height: 100vh;
  background-color: var(--bkg-color);
  color: var(--text-color);
  transition: background 0.3s;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

hr.round {
  border: 2px solid var(--border-color);
  border-radius: 5px;
}

a {
  font-family: "IBM Plex Sans Roman";
  color: inherit;
  text-decoration: inherit;
  transition: color 1s;
}
a:hover {
  color: var(--link-color);
  text-decoration: inherit;
  transition: color 0.3s;
}
</style>
