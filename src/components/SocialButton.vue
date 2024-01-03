<template>
  <section>
    <div class="social-buttons container">
      <div class="row align-items-start">
        <div class="col">
          <a
            href="mailto: arnaudjoye.contact@gmail.com"
            class="social-button social-button--snapchat"
            aria-label="Snapchat"
          >
            <p class="h6 mb-0">
              <b-icon icon="at" style="width: 45px; height: 45px"></b-icon>
            </p>
          </a>
        </div>
        <div class="col">
          <a
            href="https://www.linkedin.com/in/arnaud-joye"
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
        </div>
        <div class="col">
          <a
            href="https://github.com/joyearnaud"
            class="social-button social-button--github"
            aria-label="GitHub"
          >
            <p class="h6 mb-0">
              <b-icon icon="github" style="width: 40px; height: 40px"></b-icon>
            </p>
          </a>
        </div>
      </div>
    </div>
    <div class="row align-items-center" v-if="label">
      <div class="col">
        <a href="mailto: arnaudjoye.contact@gmail.com" class="label"
          >arnaudjoye.contact@gmail.com
        </a>
      </div>
      <div class="col">
        <a href="https://www.linkedin.com/in/arnaud-joye" class="label"
          >linkedin.com/in/arnaud-joye
        </a>
      </div>
      <div class="col">
        <a href="https://github.com/joyearnaud" class="label"
          >github.com/joyearnaud
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["label"],
};
</script>

<style scoped>
.label {
  font-size: 0.7em;
  /*writing-mode: vertical-rl;
  text-orientation: mixed;*/
}
.social-buttons {
  padding: 0.2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
