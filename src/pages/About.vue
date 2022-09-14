<template>
  <Layout>
    <PageHeader :page="$t(title)" />
    <section class="about">
      <!-- {{ $t('welcome') }} -->
      <h3>Me, Myself & I</h3>
      <p>Que peut faire un « développeur full-stack », me demandez-vous ?</p>
      <p>
        Je peux invoquer un site Web à partir de rien, entièrement formé. Je
        n'utilise pas d'astuce, encore moins de magie. Je me spécialise dans la
        manipulation de l'essence même du Web, de ses matières premières HTML,
        CSS et JavaScript. Les serveurs me servent, les domaines sont mon
        domaine et les certificats sont certains.
      </p>
      <p>
        Je peux planifier, concevoir, créer, lancer et maintenir une API
        moi-même. Ai-je mentionné que je créer également des applications
        backend ? J'ai travaillé plus de 10 ans sur de nombreux projets publiés
        et je recherche maintenant de nouveaux horizons dans le Cloud.
      </p>
      <p>
        Un développeur full-stack ne connaît pas de limites. Et quand ils en
        trouvent une, ils la traversent sans hésitation, s'enfonçant hardiment
        dans l'inconnu pour en revenir plus riches.
      </p>
    </section>
  </Layout>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import ThoughtList from "@/components/ThoughtList";

export default {
  components: {
    PageHeader,
    ThoughtList,
  },
  metaInfo: {
    title: "A simple blog",
  },
  data() {
    return {
      title: "about",
    };
  },
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</page-query>

<style></style>
