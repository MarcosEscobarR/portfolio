<template>
  <div class="skills-container">
    <div class="skills">

    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsCards'
}
</script>

<style scoped>
  .skills-container {
    display: flex;
    position: absolute;
    height: 60%;
    width: 100%;
    top: 35%;
    left: 0;
    justify-content: center;
    align-items: center;
  }
  .skills {
    width: 60vw;
    height: 100%;
    border-radius: 20px;
    box-shadow:2px 2px 4px 2px #ccc;
    background-color: white;

  }
</style>
