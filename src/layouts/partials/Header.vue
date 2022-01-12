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
        <g-link class="navlink" to="/about">ABOUT</g-link>
        <g-link class="navlink" to="/experience">EXPERIENCE</g-link>
        <g-link class="navlink" to="/thought">THOUGHT</g-link>
        <div class="col-1 switch">
          <ToggleTheme />
        </div>
      </div>
    </nav>
    <header class="layout-header">
      <nav class="nav"></nav>
    </header>
  </div>
</template>

<script>
import ToggleTheme from "@/components/ToggleTheme";
export default {
  components: {
    ToggleTheme,
  },
};
</script>

<style>
.navbar a {
  font-family: "Stylish";
  text-decoration: inherit;
  color: var(--border-color);
  transition: color 2s;
  padding: 1em;
}
.navbar a:hover {
  text-decoration: underline;
  color: var(--link-color);
  transition: color 0.3s;
}
.layout-header {
  width: 103%;
  font-family: "Stylish";
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
