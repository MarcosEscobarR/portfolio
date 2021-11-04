<template>
  <div class="welcome-container">
    <div class="main-container">
      <span class="big-title">{{ $t('welcomeTitle') }}</span>
      <span class="subtitle">{{ $t('welcomeSubtitle') }}</span>
      <img src="../static/mf-avatar.svg" class="avatar" alt="logo">
      <img class="computer" src="../static/hero.svg" alt="computer">
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
  height: calc(90vh - 40px);
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
.avatar {
  padding-top: 100px;
  min-width: 300px;
  max-width: 500px;
}
.computer {
  margin-top: auto;
  min-width: 600px;
}
</style>
