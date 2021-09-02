<template>
  <div class="container">
    <v-hover>
      <template #default="{hover}">
        <v-img
          class="img"
          src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
        >
          <v-overlay absolute/>
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

</style>
