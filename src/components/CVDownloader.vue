<template>
  <section>
    <a
      href="https://github.com/joyearnaud/file/raw/main/CV_09-2022.pdf"
      download
    >
      <button class="btn btn-outline-info color" type="submit">
        <b-container fluid class="p-4 image-holder">
          <b-row>
            <b-col>
              <g-image
                src="~/assets/CV_09-2022/CV_09-2022-1.png"
                class="image"
              />
            </b-col>
            <b-col>
              <g-image
                src="~/assets/CV_09-2022/CV_09-2022-2.png"
                class="image"
              />
            </b-col>
          </b-row>
        </b-container>
        {{ $t("cv.download") }}
      </button>
    </a>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.color {
  border-color: var(--border-color);
  color: var(--border-color);
  transition: 2s;
}

.color:hover {
  border-color: var(--text-color);
  background-color: var(--border-color);
  color: var(--bkg-color);
  transition: 0.3s;
}

.image-holder {
}

.image {
  width: 4.5em;
}
</style>
