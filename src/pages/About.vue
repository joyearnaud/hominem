<template>
  <Layout>
    <PageHeader :page="$t(title)" />
    <section class="about">
      <div class="head"></div>

      <b-container fluid="lg">
        <b-row>
          <b-col class="text-center titre">
            <Selfie></Selfie>
            <h4>Arnaud JOYE</h4>
            <h5>développeur fullstack, ingénieur</h5>
            <div class="social-buttons">
              <a
                href="mailto: arnaudjoye.contact@gmail.com"
                class="social-button social-button--snapchat"
                aria-label="Snapchat"
              >
                <p class="h6 mb-0">
                  <b-icon icon="at" style="width: 45px; height: 45px"></b-icon>
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/arnaud-joye/"
                class="social-button social-button--linkedin"
                aria-label="LinkedIn"
              >
                <p class="h6 mb-0">
                  <b-icon
                    icon="linkedin"
                    style="width: 45px; height: 30px"
                  ></b-icon>
                </p>
              </a>
              <a
                href="https://github.com/joyearnaud"
                class="social-button social-button--github"
                aria-label="GitHub"
              >
                <p class="h6 mb-0">
                  <b-icon
                    icon="github"
                    style="width: 40px; height: 40px"
                  ></b-icon>
                </p>
              </a>
            </div>
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
import PageHeader from "@/components/PageHeader";
import Selfie from "@/components/Selfie";

export default {
  components: {
    PageHeader,
    Selfie,
  },
  metaInfo: {
    title: "About",
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

<style scoped>
.titre {
  margin: 2em;
}
.description {
  min-width: 20em;
}

.social-buttons {
  padding: 16px 16px 16px 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.social-button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  width: 45px;
  height: 45px;
  text-decoration: none;
  border-radius: 100%;
  background: var(--bkg-color);
  text-align: center;
}
.social-button::after {
  content: "";
  position: absolute;
  top: -1px;
  left: 50%;
  display: block;
  width: 0;
  height: 0;
  border-radius: 100%;
  transition: 0.3s;
}
.social-button:focus,
.social-button:hover {
  color: #fff;
}
.social-button:focus::after,
.social-button:hover::after {
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  margin-left: calc(-50% - 1px);
}
.social-button i,
.social-button svg {
  position: relative;
  z-index: 1;
  transition: 0.3s;
}
.social-button i {
  font-size: 25.6px;
}
.social-button svg {
  height: 40%;
  width: 40%;
}
.social-button--mail {
  color: #0072c6;
}
.social-button--mail::after {
  background: #0072c6;
}
.social-button--facebook {
  color: #3b5999;
}
.social-button--facebook::after {
  background: #3b5999;
}
.social-button--linkedin {
  color: #0077b5;
}
.social-button--linkedin::after {
  background: #0077b5;
}
.social-button--github {
  color: #6e5494;
}
.social-button--github::after {
  background: #6e5494;
}
.social-button--codepen {
  color: #212121;
}
.social-button--codepen::after {
  background: #212121;
}
.social-button--steam {
  color: #7da10e;
}
.social-button--steam::after {
  background: #7da10e;
}
.social-button--snapchat {
  color: #eec900;
}
.social-button--snapchat::after {
  background: #eec900;
}
.social-button--twitter {
  color: #55acee;
}
.social-button--twitter::after {
  background: #55acee;
}
.social-button--instagram {
  color: #e4405f;
}
.social-button--instagram::after {
  background: #e4405f;
}
.social-button--npmjs {
  color: #c12127;
}
.social-button--npmjs::after {
  background: #c12127;
}
</style>
