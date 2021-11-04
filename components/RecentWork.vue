<template>
  <div style="margin-top: 10vh">
    <div class="container">
      <p class="title">
        My Recent Work
      </p>
      <span class="subtitle">Here are a few projects I've working recently</span>
      <div class="projects-grid">
        <project-card/>
        <project-card/>
        <project-card/>
        <project-card/>
        <project-card/>
        <project-card/>
      </div>
      <div class="d-flex  justify-center mt-8">
        <v-btn color="primary" large outlined>See More</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecentWork'
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
