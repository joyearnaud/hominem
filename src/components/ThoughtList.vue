<template>
  <div class="thought-list">
    <div>
      <g-link :to="thought.path" class="read">
        <p class="date" v-html="thought.date" />
        <h3 class="title" v-html="thought.title" />
        <p class="description" v-html="thought.description" />
        <b>{{ thought.timeToRead }} min read</b>;
        <hr class="line" />
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["thought"],
};
</script>

<style>
.line {
  border: 0.5px solid #cdc8c5;
  margin: 30px 0;
}

.date {
  font-weight: 300;
}

.read {
  padding: 7px;
  color: var(--text-color);
  text-decoration: none;
}

.visuallyhidden {
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
}
.visuallyhidden:focus {
  display: inline-block;
  padding: 15px 23px 14px;
  width: auto;
  height: auto;
  clip: auto;
  color: var(--text-color);
  background-color: var(--bkg-color);
  clip-path: unset;
}
</style>
