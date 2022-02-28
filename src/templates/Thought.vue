<template>
  <Layout>
    <br />
    <g-link to="/thought" class="link"> &larr; {{ $t('back') }}</g-link>
    <div class="thought-title">
      <h1>{{ $page.thought.title }}</h1>
      <p class="thought-date">
        {{ $d(new Date($page.thought.date), 'short') }} | {{ $page.thought.timeToRead }} {{$t('min')}} {{$t('read')}}
      </p>
    </div>
    <div class="thought-content">
      <p v-html="$page.thought.content" />
    </div>
  </Layout>
</template>

<page-query>
query Thought ($path: String!) {
   thought: thought (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<style>
.thought-title {
  text-align: center;
  font-size: 30px;
  line-height: 1.4em;
  padding: 2em 0;
  font-family: "Stylish";
}

.thought-date {
  font-size: 16px;
  font-weight: 400;
}

.thought-content {
  font-size: 20px;
}
</style>
