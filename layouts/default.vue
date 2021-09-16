<template>
  <v-app dark>
    <v-app-bar
      prominent
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      class="px-10"
    >
      <div class="pa-5">
        <v-img src="logo.svg" max-width="65" alt="logo" />
      </div>
      <v-spacer />
      <div class="pa-5">
        <span>Developer</span>
        <v-btn
          outlined
          rounded
          color="primary"
        >
          Say Hello
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <div class="footer-container">
      <div class="white-container" />
      <div class="blue-container primary">
        <div class="footer-items">
          <img src="logo-white.svg" alt="logo-white">
        </div>
      </div>
      <div class="start-project-container">
        <div class="start-project">
          <p class="primary-title">
            Start a Project
          </p>
          <p class="secondary-title">
            Interested in working together? We should queue up a chat. I’ll buy the coffee.
          </p>
          <v-btn
            outlined
            x-large
            color="primary"
          >
            Let's do it
          </v-btn>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped lang="scss">
.white-container {
  width: 100vw;
  height: 250px;
  display: flex;
  justify-content: center;
  position: relative;
  color: antiquewhite;
}

.footer-container {
  position: relative;
}

.start-project-container {
  position: absolute;
  width: 100%;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.start-project {
  background-color: #141c3a;
  width: 70vw;
  height: 250px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 20%), 0 0 0 1px #141c3a;

  .primary-title {
    color: white;
    font-size: 30px;
    font-weight: bold;
  }

  .secondary-title {
    color: white;
    font-size: 20px;
    text-align: center;
    width: 400px;
  }
}

.blue-container {
  height: calc(100vh - 250px);

  .footer-items {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
  }
}
</style>
