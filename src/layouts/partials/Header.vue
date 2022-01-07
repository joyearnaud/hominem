<template>
  <div>
    <header class="layout-header">
      <nav class="nav">
        <div class="row justify-content-start">
          <div class="menu col-1">LOGO</div>
          <div class="menu col-10">
            <g-link class="navlink" to="/">HOME</g-link>
            <g-link class="navlink" to="/about">ABOUT</g-link>
            <g-link class="navlink" to="/experience">EXPERIENCE</g-link>
            <g-link class="navlink" to="/thoughts">THOUGHTS</g-link>
          </div>
          <div class="col-1 switch">
            <ToggleTheme />
          </div>
        </div>
      </nav>
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
