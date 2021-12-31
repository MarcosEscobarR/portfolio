<template>
  <div class="container">
  </div>
</template>

<script>
export default {
  name: 'Skils'
}
</script>

<style scoped>

.container {
  width: 100vw;
  height: 800px;
  display: flex;
  justify-content: center;
  position: relative;
}

@media (max-width: 1024px) {
  .container{
    margin-top: 60px;
  }
}
@media (max-width: 800px) {
  .container {
    margin-top: 0;
  }
}
</style>
