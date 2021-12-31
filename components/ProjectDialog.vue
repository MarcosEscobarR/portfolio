<template>
  <v-dialog v-model="model" max-width="800px">
    <v-card max-width="800px">
      <v-img :src="image" alt="logo"/>
      <div class="pa-4">
        <v-card-actions class="d-block">
          <v-card-title>{{ title }}</v-card-title>
          <p style="font-size: 20px">{{ description }}</p>
        </v-card-actions>
      </div>
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
