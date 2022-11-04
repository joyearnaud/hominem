<template>
  <main class="layout" role="main">
    <Header />
    <slot />
    <div class="footer">
      <p>
        {{ $t("built with") }}
        <a class="link" href="//gridsome.org">Gridsome</a>
        & {{ $t("made with") }} ❤️ {{ $t("by") }}
        <a class="link" href="//github.com/joyearnaud">Arnaud JOYE</a>
      </p>
    </div>
  </main>
</template>

<script>
import Header from "./partials/Header";
export default {
  components: {
    Header,
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

.footer {
  padding-top: calc(30em / 4);
  text-align: center;
  font-size: 1em;
  line-height: 2.4em;
}

.link {
  border: 2px dashed var(--border-color);
  padding: 7px;
  color: var(--text-color);
  text-decoration: none;
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

.skill-content li p {
  margin-bottom: 0.1em;
}

.skill-content pre {
  border-radius: 10px;
}
</style>
