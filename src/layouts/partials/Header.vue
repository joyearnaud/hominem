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
    <hr class="round" />
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
.round {
  margin-top: 0.1vmin;
  margin-bottom: 6vmin;
}

.navbar a {
  text-align: right;
  font-family: "Stylish";
  text-decoration: inherit;
  text-transform: uppercase;
  color: var(--border-color);
  transition: color 2s;
  letter-spacing: 0.5vmin;
  font-size: 2vmin;
  font-weight: bold;
}
.navbar a:hover {
  text-align: right;
  text-decoration: underline;
  color: var(--link-color);
  transition: color 0.3s;
}
.switch {
  text-align: right;
}
</style>
