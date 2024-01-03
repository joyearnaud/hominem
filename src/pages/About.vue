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
            <hr />
            <SocialButton />
            <Download />
            <hr />
            <b-list-group
              class="company-logo-group flex-column align-items-center"
            >
              <h5>{{ $t("page.about.company.title") }}</h5>

              <b-list-group-item class="company-logo-item">
                <b-img-lazy
                  class="company-logo"
                  src="https://www.oodrive.com/wp-content/uploads/2021/12/LOGO-OODRIVE-2022-noir.svg"
                  width="100%"
                ></b-img-lazy
              ></b-list-group-item>
              <b-list-group-item class="company-logo-item"
                ><b-img-lazy
                  class="company-logo"
                  src="https://investors.societegenerale.com/themes/custom/sg_refonte_old/assets/images/logos/logo-footer.svg"
                  width="100%"
                ></b-img-lazy
              ></b-list-group-item>
              <b-list-group-item class="company-logo-item"
                ><b-img-lazy
                  class="company-logo"
                  src="http://logonews.fr/wp-content/uploads/2023/01/SMABTP_Apres.png"
                  width="100%"
                ></b-img-lazy
              ></b-list-group-item>
              <b-list-group-item class="company-logo-item"
                ><b-img-lazy
                  class="company-logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/55/Ville_de_Paris_logo.svg"
                  width="100%"
                ></b-img-lazy
              ></b-list-group-item>
              <b-list-group-item class="company-logo-item"
                ><b-img-lazy
                  class="company-logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Logo_Eutelsat.svg"
                  width="100%"
                ></b-img-lazy
              ></b-list-group-item>
              <b-list-group-item class="company-logo-item"
                ><b-img-lazy
                  class="company-logo"
                  src="https://upload.wikimedia.org/wikipedia/fr/e/e6/Logo-infotel.png"
                  width="100%"
                ></b-img-lazy
              ></b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col class="description">
            <h4>{{ $t("page.about.presentation0.title") }}</h4>
            <div class="description">
              {{ $t("page.about.presentation0.description") }}
            </div>
            <hr />
            <h5 class="title">
              {{ $t("page.about.presentation1.title") }}
            </h5>
            <div class="description">
              {{ $t("page.about.presentation1.description") }}
            </div>
            <h5 class="title">
              {{ $t("page.about.presentation2.title") }}
            </h5>
            <div class="description">
              {{ $t("page.about.presentation2.description") }}
            </div>
            <h5 class="title">
              {{ $t("page.about.presentation3.title") }}
            </h5>
            <div class="description">
              {{ $t("page.about.presentation3.description") }}
            </div>
            <h5 class="title">
              {{ $t("page.about.presentation4.title") }}
            </h5>
            <div class="description">
              {{ $t("page.about.presentation4.description") }}
            </div>
            <hr />
            <div class="description">
              {{ $t("page.about.presentation5.description") }}
            </div>
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
div.description {
  min-width: 15em;
}
div.description.col {
  margin-top: 2em;
}
div.description .title {
  font-size: 100%;
  font-weight: bold;
  color: var(--border-color);
  padding-top: 2%;
}
hr {
  margin: 3em;
}

div.description div.description {
  font-size: 85%;
  text-align: justify;
  color: var(--text-color);
}
.company-logo-group {
  margin: 2em;
  display: flex;
  align-content: center;
  color: var(--bckg-color);
  background-color: var(--txt-color);
  max-width: 18em;
  min-width: none;
}
.company-logo-item {
  align-content: center;
  background-color: var(--bkg-logo-color);
}
.company-logo {
  background-color: var(--txt-color);
  margin: 1em;
}
</style>
