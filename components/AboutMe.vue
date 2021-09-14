<template>
  <div class="container">
    <p class="title">About Me</p>
    <div class="profile-container">
      <div>
        <img src="static/logo.svg" alt="logo">
      </div>
      <div>
        <span>lorem.......</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>
<style scoped>
.container {
  height: 500px;
  width: 100%;
  display: flex;
  padding-top: 80px;
  align-items: center;
  flex-direction: column;
}
.profile-container {
  height: 300px;
  width: 90%;
  background-color: white;
  border-radius: 15%;
  display: flex;
}
.title {
  font-weight: bold;
  font-size: 2rem !important;
}
</style>
