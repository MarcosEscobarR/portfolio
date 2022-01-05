<template>
  <div>
    <Welcome />
    <div class="skils-container">
      <Presentation />
      <!--      <skils />-->
      <skills-cards />
    </div>
    <recent-work />
    <v-divider class="primary" />
    <about-me />
  </div>
</template>
<script>
export default {
  head () {
    return {
      meta: [
        { hid: 'fb:app_id', name: 'fb:app_id', content: '12873892173892' },
        { hid: 'og:title', name: 'og:title', content: 'test' },
        { hid: 'og:image', name: 'og:image', content: '/favicon.io' }
      ]
    }
  }
}
</script>
<style scoped>
  .skils-container {
    position: relative;
  }
</style>
