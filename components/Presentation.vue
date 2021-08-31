<template>
  <div class="blue-container primary">
    <div class="container">
      <div class="title-container">
        <span class="presentation-title">Hi! I'm Marcos. Nice to meet you</span>
      </div>
      <div>
        <p class="presentation-subtitle">
          Since my full experience being developer (more 3 years) I've done many many platforms for many agencies, working in person inside and outside for companies and collaborate with talent people to create very good products.
          I'm naturally Curiosly, confidential and tech lover, passionate for resolve problems with the best way.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Presentation'
}
</script>
<style scoped>
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 100px;
  }
  .title-container {
    padding-bottom: 20px;
  }
  .presentation-title {
    color: white;
    font-size: 40px;
    font-weight: bold;
  }

  .presentation-subtitle {
    color: white;
    font-size: 20px;
    text-align: center;
  }
</style>
