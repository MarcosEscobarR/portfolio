<template>
  <div class="container">
    <p class="title">
      {{ $t('aboutMeTitle') }}
    </p>
    <div class="profile-container">
      <div>
        <img src="../static/profile.jpg" alt="logo">
      </div>
      <div class="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
          nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
          tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
          quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
          sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
          minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
          quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
          fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
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
  height: 300px;
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

    p {
      font-size: 18px;
    }
  }
}
.title {
  font-weight: bold;
  font-size: 2rem !important;
}
</style>
