<template>
  <Layout>
    <Landing :page="$t('page.about.name')" />
    <section class="about">
      <div class="head"></div>

      <b-container fluid="lg">
        <b-row>
          <b-col class="text-center titre">
            <Selfie></Selfie>
            <h4>Arnaud JOYE</h4>
            <h5>développeur fullstack, ingénieur</h5>
            <SocialButton />
            <Download />
          </b-col>
          <b-col class="description">
            <h4>Me, Myself & I</h4>
            <p>
              Que peut faire un « développeur full-stack », me demandez-vous ?
            </p>
            <p>
              Je peux invoquer un site Web à partir de rien, entièrement formé.
              Je n'utilise pas d'astuce, encore moins de magie. Je me spécialise
              dans la manipulation de l'essence même du Web, de ses matières
              premières HTML, CSS et JavaScript. Les serveurs me servent, les
              domaines sont mon domaine et les certificats sont certains.
            </p>
            <p>
              Je peux planifier, concevoir, créer, lancer et maintenir une API
              moi-même. Ai-je mentionné que je créer également des applications
              backend ? J'ai travaillé plus de 10 ans sur de nombreux projets
              publiés et je recherche maintenant de nouveaux horizons dans le
              Cloud.
            </p>
            <p>
              Un développeur full-stack ne connaît pas de limites. Et quand il
              en trouve une, il la traverse sans hésitation, s'enfonçant
              hardiment dans l'inconnu pour en revenir plus riche.
            </p></b-col
          >
        </b-row>
      </b-container>
    </section>
  </Layout>
</template>

<script>
import Landing from "@/components/Landing";
import Selfie from "@/components/Selfie";
import SocialButton from "@/components/SocialButton";
import Download from "@/components/CVDownloader";

export default {
  components: {
    Landing,
    Selfie,
    SocialButton,
    Download,
  },
  metaInfo() {
    return {
      title: this.$t("page.about.name"),
      meta: [
        {
          name: "author",
          content: this.$t("author.name"),
        },
        {
          name: "description",
          content: this.$t("page.about.description"),
        },
        {
          name: "robots",
          content: "FOLLOW", //FOLLOW,INDEX,NOFOLLOW,NOINDEX
        },
      ],
    };
  },
  data() {
    return {};
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

<style scoped>
.titre {
  margin: 2em;
}
.description {
  min-width: 20em;
}
</style>
