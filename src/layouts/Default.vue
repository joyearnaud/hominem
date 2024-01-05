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
export default { components: { Header, Footer }, async mounted() {} };
</script>
