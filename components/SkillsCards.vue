<template>
  <div class="skills-container">
    <div class="skills">
      <skill-item
        icon="/analysis.svg"
        title="Frontend"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"
        :skills="frontendSkills"
      />
      <v-divider vertical class="divider" dark/>
      <skill-item
        icon="/seo.svg"
        title="Backend"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"
        :skills="backendSkills"
      />
      <v-divider vertical class="divider" dark />
      <skill-item
        icon="/mobile-app.svg"
        title="App Development"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"
        :skills="appSkills"
      />
      <v-divider />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsCards',
  data: () => ({
    frontendSkills: ['React', 'Nextjs', 'Vuejs', 'Nuxtjs', 'HTML', 'CSS'],
    backendSkills: ['TypeScript', 'JavaScript', 'Node', 'c#', 'ASP .NET Core'],
    appSkills: ['React Native', 'Flutter']
  })
}
</script>

<style scoped>
  .skills-container {
    display: flex;
    position: absolute;
    height: 650px;
    width: 100%;
    top: 30%;
    left: 0;
    justify-content: center;
    align-items: center;
    justify-content: center;
  }
  .skills {
    width: 60vw;
    height: 100%;
    border-radius: 20px;
    box-shadow:1.5px 1.5px 1.5px 1.5px #ccc;
    background-color: white;
    display: flex;
    flex-direction: row;
  }
  .divider {
    background-color: #ced9d9
  }

  @media (max-width: 1200px) {
    .skills {
      width: 80vw;
    }
  }
  @media (max-width: 900px){
    .skills {
    }
  }
</style>
