<template>
  <div class="container">
    <div class="sub-container">
      <img :src="icon" width="100px" height="100px" alt="icon">
      <p class="title-container">{{ title }}</p>
      <div class="subtitle-container">
        <p class="subtitle">
          {{ subtitle }}
        </p>
      </div>
    </div>
    <div class="items-container">
      <p class="primary--text mb-2 text-center" style="font-size: 20px">
        {{$t('skillsTitle')}}
      </p>
      <div>
        <p v-for="(skill, index) in skills" :key="index" class="skill">
          {{ skill }}
        </p>
      </div>
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
  justify-content: space-between;
  width: calc(100% / 3);
}

.sub-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.title-container {
  font-weight: bold;
  font-size: 20px;
  padding: 10px 0;
}

.subtitle {
  text-align: center;
  letter-spacing: 0.5px;
  color: grey;
  word-break: normal;
}

.subtitle-container {
  padding: 10px 0;
  display: block;
  height: auto;
  overflow: auto;
}

.skill {
  color: black;
  margin-bottom: 2px;
  font-weight: 300;
}

.items-container {
  height: 200px;
}
</style>
