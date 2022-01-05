import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '',
    title: 'Marcos Escobar Dev',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'fb:description', name: 'fb:description', content: 'Portfolio de Marcos Escobar' },
      { hid: 'og:title', name: 'og:title', content: 'Marcos Escobar' },
      { hid: 'og:image', name: 'og:image', content: '/favicon.io' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'this is a developer portfolio Marcos Escobar '
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'keywords',
        content: 'website, portfolio, web developer, app developer'
      },
      {
        name: 'author',
        content: 'Marcos Escobar'
      }

    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~layouts/globals.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],
  i18n: {
    baseUrl: 'https://marcos-portafolio.herokuapp.com',
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'es',
        iso: 'es-ES'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'es',
      messages: {
        en: require('./assets/locales/en.json'),
        es: require('./assets/locales/es.json')
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#0398fc',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
