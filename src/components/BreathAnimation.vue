<template>
  <section class="breathe" :class="{ ho: hover }">
    <span v-html="label"></span>
  </section>
</template>

<script>
export default {
  props: ["label", "hover"],
};
</script>


<style>
@font-face {
  font-family: "IBM Plex Sans Roman";
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/85648/IBMPlexSansVar-Roman.ttf");
}

* {
  box-sizing: border-box;
}

section.breathe {
  font-family: "IBM Plex Sans Roman", Times;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--border-color);
}

.breathe span {
  font-weight: 100;
  font-size: 3em;
  animation: breathe-reversed 0.5s ease-in-out forwards;
}
/* .breathe span:hover {
  animation: breathe 0.5s ease-in-out forwards;
} */
.breathe.ho span {
  font-weight: 100;
  font-size: 3em;
  animation: breathe-reversed 0.5s ease-in-out forwards;
}
.breathe.ho span:hover {
  animation: breathe 0.5s ease-in-out forwards;
}

@keyframes breathe {
  0% {
    font-variation-settings: "wght" 100, "wdth" 85;
  }
  100% {
    font-variation-settings: "wght" 700, "wdth" 100;
  }
}
@keyframes breathe-reversed {
  0% {
    font-variation-settings: "wght" 700, "wdth" 100;
  }
  100% {
    font-variation-settings: "wght" 100, "wdth" 85;
  }
}
</style>
