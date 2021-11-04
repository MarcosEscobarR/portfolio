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
        <v-menu
          bottom
          origin="center center"
          transition="scale-transition"
        >
          <template #activator="{ on, attrs }">
            <v-btn
              icon
              large
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="primary" large>mdi-web</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item :to="switchLocalePath('es')">
              <v-list-item-icon> <country-flag country="esp" size="big" /> </v-list-item-icon>
              <v-list-item-title>Español</v-list-item-title>
            </v-list-item>
            <v-list-item :to="switchLocalePath('en')">
              <v-list-item-icon> <country-flag country="us" size="big" /> </v-list-item-icon>
              <v-list-item-title>Ingles</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="pa-5">
        <span>{{ $t('layoutTitle') }}</span>
        <v-btn
          outlined
          rounded
          color="primary"
        >
          {{ $t('helloButton') }}
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
          <div class="phrase">
            <p>
              “ {{ $t('phrase') }}” – Coco Chanel
            </p>
          </div>
          <div>
            <v-btn icon class="mx-5" href="https://github.com/MarcosEscobarR" target="_blank">
              <v-icon size="50">
                mdi-github
              </v-icon>
            </v-btn>
            <v-btn target="_blank" icon class="mx-5" href="https://www.linkedin.com/in/marcos-escobar-3a86a41a0">
              <v-icon size="50">
                mdi-linkedin
              </v-icon>
            </v-btn>
            <v-btn target="_blank" icon class="mx-5" href="https://www.instagram.com/_escmarcos/">
              <v-icon size="50">
                mdi-instagram
              </v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <div class="start-project-container">
        <div class="start-project">
          <p class="primary-title">
            {{ $t('footerTitle') }}
          </p>
          <p class="secondary-title">
            {{ $t('footerSubtitle') }}
          </p>
          <v-btn
            outlined
            x-large
            color="primary"
          >
            {{ $t('letsDoIt') }}
          </v-btn>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
  components: {
    CountryFlag
  },
  data () {
    return {}
  }
}
</script>
<style scoped lang="scss">
.web-icon {
  display: flex;
  justify-content: center;
  flex-direction: column
}
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
    flex-direction: column;
    padding-top: 160px;

    img {
      height: 50px;
      width: 50px;
    }

  }

  .phrase {
    width: 40%;
    margin: 30px;
    display: flex;
    justify-content: center;

    p {
      color: white;
      font-size: 30px;
      text-align: center;
      font-style: oblique;
    }
  }
}
</style>
