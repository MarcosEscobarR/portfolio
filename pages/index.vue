<template>
  <div>
    <Welcome />
    <div class="skils-container">
      <Presentation />
      <skills-cards />
    </div>
    <v-divider class="primary"/>
    <recent-work />
    <v-divider class="primary" />
    <about-me />
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
  .skils-container {
    position: relative;
  }
</style>
