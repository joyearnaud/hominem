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
  async mounted() {},
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

article a {
  font-family: "IBM Plex Sans Roman";
  color: var(--link-color);
  text-decoration: underline;
  transition: color 1s;
}
article a:hover {
  color: var(--accent-color);
  text-decoration: inherit;
  transition: color 0.3s;
}
article h1,
h2,
h3,
h4,
h5,
h6,
h7,
h8 {
  text-justify: none;
}
article .mermaid {
  text-align: center;
  transition: 2s;
  margin-top: 1em;
  margin-bottom: 2em;
}
article .mermaid rect {
  fill: var(--accent-color) !important;
  stroke: var(--bkg-color) !important;
  stroke-width: 1px !important;
}
article .mermaid path {
  stroke: var(--text-color) !important;
  stroke-width: 2px !important;
}
article .mermaid .label {
  color: var(--bkg-color) !important;
}
article .mermaid .edgeLabel {
}
article .contenttable {
  font-size: 0.8em;
  margin: 1em;
  padding: 1em;
  text-decoration: none;
  background-color: var(--line-color) !important;
  color: var(--text-color) !important;
  border: 2px solid var(--border-color);
  border-radius: 5px;
  text-justify: none;
}
article .contenttable p {
  margin: 0;
  padding: 0;
}
article .contenttable a {
  padding: 1px;
  color: var(--bkg-color);
  text-decoration: underline;
}
article .contenttable a:hover {
  color: var(--accent-color);
  text-decoration: none;
}
article code {
  font-size: 0.8em !important;
}
</style>
