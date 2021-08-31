<template>
  <div class="welcome-container">
    <div class="main-container">
      <span class="big-title">Frontend, Backend and Apps Developer</span>
      <span class="subtitle">Building beautiful apps and webs since 2 years</span>
      <v-img src="mf-avatar.svg" max-width="350px" />
      <v-img class="mt-auto" src="world-grid.svg" max-width="200px"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style scoped>
.welcome-container {
  height: calc(100vh - 130px);
  width: 100vw;
}
.big-title {
  font-weight: bold;
  font-size: 50px;
}

.subtitle {
  font-size: 30px;
}
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
