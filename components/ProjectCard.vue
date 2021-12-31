<template>
  <div class="container">
    <v-hover>
      <template #default="{hover}">
        <v-img
          class="img"
          contain
          :src="projectData.image"
        >
          <v-overlay absolute>
            <div v-if="!hover" class="title-container">
              <p>{{ title }}</p>
            </div>
          </v-overlay>
          <v-fade-transition>
            <v-overlay v-if="hover" absolute>
              <v-btn outlined @click="open = !open">
                See More
              </v-btn>
            </v-overlay>
          </v-fade-transition>
        </v-img>
      </template>
    </v-hover>
    <project-dialog
      v-if="open"
      v-model="open"
      :title="projectData.title"
      :description="projectData.description"
      :image="projectData.image"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'test'
    },
    projectData: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    open: false
  })
}
</script>

<style scoped lang="scss">
.container {
  width: 400px;
  height: 320px;
  border-radius: 20px;

  .img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
}

.title-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: baseline !important;

  p {
    font-size: 30px;
    color: white;
  }
}

@media (max-width: 800px) {
  .container{
    width: 300px;
    height: 250px;
  }
}

</style>
