<template>
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
        <div class="mr-10">
          <country-flag style="border-radius: 25px" :country="$i18n.locale === 'es'? 'esp' : 'us'" size="big" />
          <p>{{ $i18n.locale === 'es' ? "Idoma Español" : "English Language" }}</p>
        </div>
      </v-btn>
    </template>

    <v-list>
      <v-list-item :to="switchLocalePath('es')">
        <v-list-item-icon>
          <country-flag country="esp" size="big" />
        </v-list-item-icon>
        <v-list-item-title>Español</v-list-item-title>
      </v-list-item>
      <v-list-item :to="switchLocalePath('en')">
        <v-list-item-icon>
          <country-flag country="us" size="big" />
        </v-list-item-icon>
        <v-list-item-title>Ingles</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
  name: 'LanguageMenu',
  components: {
    CountryFlag
  }
}
</script>

<style scoped>

</style>
