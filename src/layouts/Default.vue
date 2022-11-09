<template>
  <main class="layout" role="main">
    <Header />
    <slot />
    <div class="footer">
      <p>
        {{ $t("built with") }}
        <a class="link" href="//gridsome.org">Gridsome</a>
        & {{ $t("made with") }} ❤️ {{ $t("by") }}
        <a class="link" href="//github.com/joyearnaud">Arnaud JOYE</a>
      </p>
      <p>
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
      </p>
      <p>© 2021 ➔ 2022 Arnaud JOYE | <a
        href="#">Credits</a>
      </p>
    </div>
  </main>
</template>

<script>
import Header from "./partials/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style>
@font-face {
  font-family: "IBM Plex Sans Roman";
  src: local("IBM Plex"), url("../assets/IBMPlexSansVarRoman.ttf");
  font-display: swap;
}

:root {
  --text-color: #333;
  --border-color: #feae45;
  --bkg-color: white;
  --line-color: #00a672;
  --link-color: #7a5422;
  --accent-color: #ff1493;
  --reverted-color: 0;
}
:root [data-theme="sepia"] {
  --text-color: #433422;
  --border-color: #00a672;
  --bkg-color: #f1e7d0;
  --line-color: #5a64c4;
  --link-color: #015238;
  --accent-color: #ff1493;
  --reverted-color: 0;
}

:root [data-theme="dark"] {
  --text-color: #ffffffcb;
  --border-color: #5a64c4;
  --bkg-color: #030200;
  --line-color: #fecd43;
  --link-color: #587af7;
  --accent-color: #ff1493;
  --reverted-color: 1;
}

body {
  min-width: 24em;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  border: 15px solid var(--border-color);
  min-height: 100vh;
  background-color: var(--bkg-color);
  color: var(--text-color);
  transition: background 0.3s;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.footer {
  padding-top: calc(30em / 4);
  text-align: center;
  font-size: 1em;
  line-height: 2.4em;
}

.link {
  border: 2px dashed var(--border-color);
  padding: 7px;
  color: var(--text-color);
  text-decoration: none;
}

hr.round {
  border: 2px solid var(--border-color);
  border-radius: 5px;
}

a {
  font-family: "IBM Plex Sans Roman";
  color: inherit;
  text-decoration: inherit;
  transition: color 1s;
}
a:hover {
  color: var(--link-color);
  text-decoration: inherit;
  transition: color 0.3s;
}

.skill-content li p {
  margin-bottom: 0.1em;
}

.skill-content pre {
  border-radius: 10px;
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
