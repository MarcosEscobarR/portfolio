<template>
  <div style="margin-top: 10vh">
    <div class="container">
      <p class="title">
        {{ $t('recentTitle') }}
      </p>
      <span class="subtitle">{{ $t('recentSubtitle') }}</span>
      <vue-slick-carousel :arrows="true" :dots="true">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </vue-slick-carousel>
      <div class="d-flex  justify-center mt-8">
        <v-btn color="primary" large outlined href="https://github.com/MarcosEscobarR" target="_blank">
          See More
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import { ProjectData } from '~/helpers/ProjectData'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'RecentWork',
  components: { VueSlickCarousel },

  data: () => ({
    projectData: ProjectData,
    carouselSettings: {
      dots: true,
      focusOnSelect: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      touchThreshold: 5
    }
  })
}
</script>

<style scoped>
.container {
  margin-bottom: 100px;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

}
  .title {
    font-weight: bold;
    font-size: 2rem !important;
  }
.subtitle {
  font-size: 20px;
  font-weight: 200;
}
.projects-grid {
  max-width: 1440px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>
