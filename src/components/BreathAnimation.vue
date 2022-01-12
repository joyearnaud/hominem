<template>
  <breath>
    <span class="test" v-html="text"></span>
  </breath>
</template>

<script>
export default {
  props: ["text"],
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

breath {
  font-family: "IBM Plex Sans Roman", Times;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

span.test {
  font-weight: 100;
  font-size: 10vw;
  font-variation-settings: "wght" 100, "wdth" 85;
  animation: breathe 4000ms infinite forwards;
}

@keyframes breathe {
  60% {
    font-variation-settings: "wght" 700, "wdth" 100;
  }

  100% {
    font-variation-settings: "wght" 100, "wdth" 85;
  }
}
</style>
