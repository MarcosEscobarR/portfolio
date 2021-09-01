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
        <v-img src="logo.svg" max-width="65" alt="logo"/>
      </div>
      <v-spacer/>
      <div class="pa-5">
        <span>Developer</span>
        <v-btn
          outlined
          rounded
          color="primary">Say Hello</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
