<template>
  <v-dialog v-model="model" max-width="600px">
    <v-card max-width="600px">
      <v-img :src="image">
        <v-card-title>{{ title }}</v-card-title>
      </v-img>
      <v-card-text>{{ description }}</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ProjectDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style scoped>

</style>
