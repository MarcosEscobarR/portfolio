<template>
  <div class="container">
    <p class="title">
      {{ $t('aboutMeTitle') }}
    </p>
    <div class="profile-container">
      <div class="image-container">
        <img src="../static/profile.jpg" alt="logo">
      </div>
      <div class="description">
        <p>
          {{ $t('aboutMeDescription') }}
        </p>
      </div>
    </div>
    <experience-meter
      title="ASP .Net Core"
      subtitle="1.5"
      :progress="aspMeter"
    />
    <experience-meter
      title="JavaScript"
      subtitle="3"
      :progress="jsMeter"
    />
    <experience-meter
      title="VueJs/ ReactJs"
      subtitle="2"
      :progress="vueReactMeter"
    />
    <experience-meter
      title="Flutter"
      subtitle="1.5"
      :progress="flutterMeter"
    />

    <div />
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'AboutMe',
  data: () => ({
    ageToFirsCode: dayjs().year(2018).year()
  }),
  computed: {
    aspMeter () {
      const currentYear = dayjs().year()
      const experienceYear = 1.5
      return (experienceYear * 100) / (currentYear - this.ageToFirsCode)
    },
    jsMeter () {
      const currentYear = dayjs().year()
      const experienceYear = 3
      return (experienceYear * 100) / (currentYear - this.ageToFirsCode)
    },
    vueReactMeter () {
      const currentYear = dayjs().year()
      const experienceYear = 2
      return (experienceYear * 100) / (currentYear - this.ageToFirsCode)
    },
    flutterMeter () {
      const currentYear = dayjs().year()
      const experienceYear = 1.5
      return (experienceYear * 100) / (currentYear - this.ageToFirsCode)
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  height: auto;
  width: 100%;
  display: flex;
  padding-top: 80px;
  align-items: center;
  flex-direction: column;
}
.profile-container {
  height: auto;
  width: 90%;
  background-color: white;
  border-radius: 15%;
  display: flex;

  img {
    width: 300px;
    height: 300px;
    border-radius: 100%;
  }

  .description {
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      font-size: 20px;
    }
  }
}
.title {
  font-weight: bold;
  font-size: 2rem !important;
}
.image-container{
  display: flex;
}

@media (max-width: 1024px) {
  .profile-container{
    flex-direction: column;
  }
  .image-container {
    justify-content: center;
  }
}
</style>
