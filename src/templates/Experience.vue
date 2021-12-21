<template>
  <Layout>
    <br />
    <g-link to="/" class="link"> &larr; Go Back</g-link>
    <div class="experience-title">
      <h1>{{ $page.experience.client }}</h1>
      <p class="experience-date">
        {{ $page.experience.datestart }} | {{ $page.experience.dateend }}
      </p>
      <p>{{ $page.experience.timeToRead }} min read</p>
    </div>
    <div class="experience-content">
      <p v-html="$page.experience.content" />
    </div>
  </Layout>
</template>

<page-query>
query Experience ($path: String!) {
   experience: experience (path: $path) {
      id
      client
      project
      role
      timeToRead
      description
      datestart(format: "D MMMM YYYY")
      dateend(format: "D MMMM YYYY")
      path
      content
  }
}
</page-query>

<style>
.experience-title {
  text-align: center;
  font-size: 30px;
  line-height: 1.4em;
  padding: 2em 0;
  font-family: "Stylish";
}

.experience-date {
  font-size: 16px;
  font-weight: 400;
}

.experience-content {
  font-size: 20px;
}
</style>
