<template>
  <Layout>
    <br />
    <g-link to="/experience" class="link"> &larr; {{ $t('back') }}</g-link>
    <div class="experience-title">
      <h1>{{ $page.experience.client }}</h1>
      <p class="experience-date">
        {{ $d(new Date($page.experience.datestart), 'short') }} | {{ $d(new Date($page.experience.dateend), 'short') }}
      </p>
      <p>{{ $page.experience.timeToRead }} {{$t('min')}} {{$t('read')}}</p>
    </div>
    <div class="experience-content">
      <p v-html="$page.experience.content" />
    </div>
    <div class="experience-keywords">
    <h3>Skills</h3>
    <ul>
      <li v-for="skill in $page.experience.skills" :key="skill.id">
        <p> 
        <g-link class="navlink" :to="skill.path">{{ skill.name }}</g-link>
        <span v-for="version in skill.versions" :key="version.id">
          {{ version }} 
        </span>
        {{ skill.level }}</p> 
      </li>
    </ul>
    <h3>Keywords</h3>
    <ul>
      <li v-for="keyword in $page.experience.keywords" :key="keyword.id">
        <p> 
        <g-link class="navlink" :to="'skill/'+keyword.name">{{ keyword.name }}</g-link>
        <span v-for="version in keyword.versions" :key="version.id">
          {{ version }} 
        </span>
        {{ keyword.note }}</p> 
      </li>
    </ul>
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
      datestart(format: "YYYY-MM-DD")
      dateend(format: "YYYY-MM-DD")
      path
      content
      skills{
        id
        name
        path
        categorie
        content
        excerpt
        level
        datestart
        dateend
        timeToRead

      }
      keywords {
        name
        versions
        note
      }
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

.experience-title h1 {
  font-family: "IBM Plex Sans Roman";
  text-transform: uppercase;
}

.experience-date {
  font-size: 16px;
  font-weight: 400;
}

.experience-content {
  font-size: 20px;
}
</style>
