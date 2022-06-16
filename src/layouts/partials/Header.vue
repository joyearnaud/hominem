<template>
  <div>
    <nav class="navbar">
      <div class="container-fluid">
        <g-link class="navlink logo" to="/"
          ><g-image
            src="~/assets/cosmonaut.png"
            width="40"
            blur="40"
            immediate="true"
          />
        </g-link>
        <g-link class="navlink" to="/about">{{
          removeAccent($t("about"))
        }}</g-link>
        <g-link class="navlink" to="/experience">{{
          removeAccent($t("experience"))
        }}</g-link>
        <g-link class="navlink" to="/thought">{{
          removeAccent($t("thoughts"))
        }}</g-link>
        <div class="col-1 switch">
          <ToggleTheme />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ToggleTheme from "@/components/ToggleTheme";
export default {
  components: {
    ToggleTheme,
  },
  methods: {
    removeAccent: (text) =>
      text.normalize("NFD").replace(/\p{Diacritic}/gu, ""),
  },
};
</script>

<style>
#app > div:nth-child(1) > nav > div > a {
  font-size: 2vw;
}
.navbar a {
  font-family: "Stylish";

  text-decoration: inherit;
  text-transform: uppercase;
  color: var(--border-color);
  transition: color 2s;
  letter-spacing: 2px;
  font-size: 16px;
  font-weight: bold;
}
.navbar a:hover {
  text-decoration: underline;
  color: var(--link-color);
  transition: color 0.3s;
}
.layout-header {
  font-family: "IBM Plex Sans Roman";
  font-size: 1.2em;
  text-align: center;
  line-height: 1.4em;
  margin: 0px auto;
  margin-top: 10px;
}
.row {
  width: 100%;
}
.menu {
  text-align: center;
}
.menu .navlink {
  padding-right: 1em;
  color: var(--text-color);
  text-decoration: none;
}
.menu .navlink:hover {
  padding-right: 1em;
  color: var(--border-color);
  text-decoration: underline;
}
.switch {
  text-align: right;
}
</style>
