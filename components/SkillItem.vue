<template>
  <div class="container">
    <img :src="icon" width="100px" height="100px" alt="icon">
    <span class="title-container">{{ title }}</span>
    <div class="subtitle-container">
      <p class="subtitle">
        {{ subtitle }}
      </p>
    </div>
    <div>
      <p class="primary--text mb-2 text-center" style="font-size: 20px">
        Skills
      </p>
      <div>
        <p v-for="(skill, index) in skills" :key="index" class="skill">
          {{ skill }}
        </p>
      </div>
    </div>

    <div class="d-flex justify-center mt-auto">
      <v-btn outlined color="primary">
        More
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillItem',
  props: {
    icon: {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    subtitle: {
      type: String,
      require: true
    },
    skills: {
      type: Array,
      require: true
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: calc(100%/3);
  }
  .title-container {
    font-weight: bold;
    font-size: 20px;
    padding: 10px 0;
  }

  .subtitle {
    text-align: center;
    word-break: break-all;
    letter-spacing: 0.5px;
    color: grey;
  }

  .subtitle-container {
    padding: 10px 0;
    display: block;
    height: 150px;
    overflow: auto;
  }

  .skill {
    color: black;
    margin-bottom: 2px;
    font-weight: 300;
  }

</style>
