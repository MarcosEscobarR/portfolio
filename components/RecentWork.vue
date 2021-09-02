<template>
  <div class="container">
    <p class="title">
      My Recent Work
    </p>
    <span class="subtitle">Here are a few projects I've working recently</span>
    <div class="projects-grid">
      <project-card />
      <project-card />
      <project-card />
      <project-card />
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
  width: 100vw;
  height: 100vh;
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
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>
