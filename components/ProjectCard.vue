<template>
  <div class="container">
    <v-hover>
      <template #default="{hover}">
        <v-img
          class="img"
          src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
        >
          <v-overlay absolute>
            <div class="title-container">
              <p>{{ title }}</p>
            </div>
          </v-overlay>
          <v-fade-transition>
            <v-overlay v-if="hover" absolute>
              <v-btn outlined>
                See More
              </v-btn>
            </v-overlay>
          </v-fade-transition>
        </v-img>
      </template>
    </v-hover>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'test'
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 290px;
  height: 250px;
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

</style>
