<template>
  <header>
    <nav class="navbar">
      <div class="container-fluid">
        <g-link class="col-1 logo switch" :to="$tp('/')"> <Logo /> </g-link>
        <g-link class="navlink" :to="$tp('/about/')">{{
          removeAccent($t("page.about.name"))
        }}</g-link>
        <g-link class="navlink" :to="$tp('/experience')">{{
          removeAccent($t("page.experiences.name"))
        }}</g-link>
        <g-link class="navlink" :to="$tp('/thought')">{{
          removeAccent($t("page.thoughts.name"))
        }}</g-link>
        <div class="col-1 switch">
          <ToggleTheme />
        </div>
      </div>
    </nav>
    <hr class="round under" />
  </header>
</template>

<script>
import ToggleTheme from "@/components/ToggleTheme";
import Logo from "@/components/Logo";
export default {
  components: {
    ToggleTheme,
    Logo,
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
}

.under {
  z-index: -1;
}

.over {
  z-index: 6;
}

.navbar a {
  text-align: right;
  font-family: "Stylish";
  text-decoration: inherit;
  text-transform: uppercase;
  color: var(--border-color);
  transition: color 2s;
  letter-spacing: 0.5vmin;
  font-size: 3vmin;
  font-weight: bold;
}
.navbar a:hover {
  text-align: right;
  text-decoration: underline;
  color: var(--link-color);
  transition: color 0.3s;
}

.logo {
  transform: rotate(22deg);
  width: 2vmax;
  max-width: 500px;
}
.switch {
  text-align: right;
}
</style>
