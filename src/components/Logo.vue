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
  width: 3.3vmax;
  fill: var(--border-color);
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
  border-radius: 3px;
}

.logo div:nth-child(1)::before {
  background: yellow;
  border-radius: 3px;
}

.logo div:nth-child(2) {
  right: -75%;
  top: 0px;
  transform-origin: bottom left;
  border-radius: 3px;
}
.logo div:nth-child(2)::before {
  background: greenyellow;
  border-radius: 3px;
}

.logo div:nth-child(3) {
  bottom: -75%;
  left: 0px;
  transform-origin: top left;
  border-radius: 3px;
}

.logo div:nth-child(3)::before {
  background: pink;
  border-radius: 3px;
}
.logo div:nth-child(4) {
  left: -75%;
  top: 0px;
  transform-origin: top right;
  border-radius: 3px;
}

.logo div:nth-child(4)::before {
  background: cyan;
  border-radius: 3px;
}

.logo:before,
.logo div::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;
  background: linear-gradient(var(--border-color), var(--accent-color));
  padding: 5px;
  animation: colorate 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes colorate {
  0% {
    background: linear-gradient(var(--border-color), pink);
  }
  50% {
    background: linear-gradient(pink, cyan);
  }
  75% {
    background: linear-gradient(cyan, greenyellow);
  }
  100% {
    background: linear-gradient(greenyellow, yellow);
  }
}
</style>
