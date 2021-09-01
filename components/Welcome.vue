<template>
  <div class="welcome-container">
    <div class="main-container">
      <span class="big-title">Frontend, Backend and Apps Developer</span>
      <span class="subtitle">Building beautiful apps and webs since 2 years</span>
      <img src="../static/mf-avatar.svg" width="200px" alt="logo"/>
      <img class="mt-auto" src="../static/hero.svg" width="600px" alt="computer"/>
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
  height: calc(85vh - 40px);
  width: 100vw;
}
.big-title {
  font-weight: bold;
  font-size: 40px;
}

.subtitle {
  font-size: 30px;
}
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
</style>
