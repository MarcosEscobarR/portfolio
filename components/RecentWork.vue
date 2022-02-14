<template>
  <div class="big-container">
    <div class="container">
      <p class="title">
        {{ $t('recentTitle') }}
      </p>
      <span class="subtitle">{{ $t('recentSubtitle') }}</span>
      <ProjectsCarousel :data="projectData"/>
      <ProjectsCarousel :data="projectData"/>
      <div class="d-flex  justify-center mt-8">
        <v-btn color="primary" large outlined href="https://github.com/MarcosEscobarR" target="_blank">
          See More
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { ProjectData } from '~/helpers/ProjectData'

export default {
  name: 'RecentWork',

  data: () => ({
    projectData: ProjectData
  })
}
</script>

<style scoped>
.big-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.container {
  margin-bottom: 100px;
  margin-top: 20px;
  max-width: 1440px;
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

</style>
