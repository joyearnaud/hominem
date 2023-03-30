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
            <h5>{{ $t("page.about.job.title") }}</h5>
            <h6>
              {{ $t("page.about.job.company") }} /
              {{ $t("page.about.job.location") }}
            </h6>
            <h7>{{ $t("page.about.job.period") }}</h7>
            <SocialButton />
            <Download />
          </b-col>
          <b-col class="description">
            <h4>Me, Myself & I</h4>

            <p>{{ $t("page.about.presentation1") }}</p>
            <p>{{ $t("page.about.presentation2") }}</p>
            <p>{{ $t("page.about.presentation3") }}</p>
            <p>{{ $t("page.about.presentation4") }}</p>
            <p>{{ $t("page.about.presentation5") }}</p>
          </b-col>
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
      title: this.$t("page.about.title"),
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
