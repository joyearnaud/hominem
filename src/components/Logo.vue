<template>
  <section class="logo">
    <div>
      <hr class="round" />
    </div>
    <div>
      <hr class="round" />
    </div>
    <div>
      <hr class="round" />
    </div>
    <div>
      <hr class="round" />
    </div>
    <span class="label ll"
      ><svg class="ll" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m19.07 4.93c-1.85-1.93-4.41-2.97-7.07-2.93-2.66-.04-5.21 1-7.06 2.93-1.94 1.85-2.98 4.41-2.94 7.07-.04 2.66 1 5.21 2.93 7.06 1.85 1.94 4.41 2.98 7.07 2.94 2.66.04 5.21-1 7.06-2.93 1.94-1.85 2.98-4.41 2.94-7.07.04-2.66-1-5.22-2.93-7.07m-2.07 7.07v6h-3.5v-5h-3v5h-3.5v-6h-2l7-7 7.5 7z"
        /></svg
    ></span>
  </section>
</template>

<script>
export default {
  props: ["label", "hover"],
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.label {
  position: absolute;
  font-weight: 100;
  color: var(--border-color);
  animation: breathe-reversed 0.5s ease-in-out forwards;
}

.ll {
  width: 3.5vmax;
  fill: var(--link-color);
}

hr.round {
  border: 0.3vmin solid var(--border-color);
  border-radius: 5px;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  position: relative;
  width: 1vmax;
  height: 1vmax;
  background: black;
  /*animation: rotate 1s linear infinite forwards paused;*/
}

@keyframes rotate {
  0% {
    transform: rotate(90deg);
  }
  25% {
    transform: rotate(-70deg);
  }
  50% {
    transform: rotate(-230deg);
  }
  100% {
    transform: rotate(-390deg);
  }
}

.logo div {
  position: absolute;
  height: 100%;
  width: 100%;
  background: black;
  border-radius: 10%;
  /*animation: animate 1s linear infinite forwards paused;*/
}

.logo:hover > .logo div {
  animation: animate 1s linear infinite forwards running;
}
.logo:hover {
  animation: rotate 1s linear infinite forwards running;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  50%,
  100% {
    transform: rotate(180deg);
  }
}

.logo div:nth-child(1) {
  top: -75%;
  left: 0px;
  transform-origin: bottom right;
}

.logo div:nth-child(1)::before {
  background: yellow;
}

.logo div:nth-child(2) {
  right: -75%;
  top: 0px;
  transform-origin: bottom left;
}
.logo div:nth-child(2)::before {
  background: greenyellow;
}

.logo div:nth-child(3) {
  bottom: -75%;
  left: 0px;
  transform-origin: top left;
}

.logo div:nth-child(3)::before {
  background: pink;
}
.logo div:nth-child(4) {
  left: -75%;
  top: 0px;
  transform-origin: top right;
}

.logo div:nth-child(4)::before {
  background: cyan;
}

.logo:before,
.logo div::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;
  background: linear-gradient(var(--border-color), pink);
  padding: 5px;
  animation: colorate 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes colorate {
  0% {
    background: linear-gradient(var(--border-color), pink);
  }
  50% {
  }
  75% {
  }
  100% {
  }
}
</style>
