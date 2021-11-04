<template>
  <div style="margin-top: 10vh">
    <div class="container">
      <p class="title">
        {{$t('recentTitle')}}
      </p>
      <span class="subtitle">{{$t('recentSubtitle')}}</span>
      <div class="projects-grid">
        <project-card v-for="(item, index) in Object.values(projectData)" :key="index" :title="item.title" :project-data="item" />
      </div>
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
  width: 90%;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>
