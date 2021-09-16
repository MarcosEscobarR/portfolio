<template>
  <div class="experience-container">
    <div class="titles-container">
      <p class="title">{{ title }}</p>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
    <v-progress-linear
      color="primary"
      height="8"
      rounded
      background-color="grey"
      :value="progress" />
  </div>
</template>

<script>
export default {
  name: 'ExperienceMeter',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    progress: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
  .experience-container {
    width: 80%;
    height: auto;
    padding: 10px 0;
  }
  .title {
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 0;
  }
  .subtitle {
    color: #cccccc;
  }
  .titles-container {
    display: block;
    width: 100%;
    margin: 10px 0;
  }
</style>
