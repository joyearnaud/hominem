<template>
  <footer class="footer">
    <p>
      {{ $t("built with") }}
      <a class="link" href="//gridsome.org">Gridsome</a>
      & {{ $t("made with") }} ❤️ {{ $t("by") }}
      <a class="link" href="/about">Arnaud JOYE</a>
    </p>
    <p><SocialButton label="true" /></p>
    <p>© 2022 ➔ 2023 Arnaud JOYE | <a href="#">Credits</a></p>
  </footer>
</template>

<script>
import SocialButton from "@/components/SocialButton";

export default {
  components: {
    SocialButton,
  },
};
</script>

<page-query></page-query>

<style scoped>
.footer {
  padding-top: calc(30em / 4);
  text-align: center;
  font-size: 0.8em;
  line-height: 2.4em;
}

.link {
  border: 2px dashed var(--border-color);
  padding: 7px;
  color: var(--text-color);
  text-decoration: none;
}
</style>
