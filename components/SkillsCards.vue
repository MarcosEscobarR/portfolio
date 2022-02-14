<template>
  <div class="d-flex justify-center">
    <div class="big-container">
      <div class="skills-container">
        <div class="skills">
          <v-row>
            <v-col
              class="d-flex"
              cols="12"
              xl="3"
              sm="6"
              md="6"
              lg="3"
            >
              <skill-item
                icon="/analysis.svg"
                title="Frontend"
                :subtitle="$t('skillsFrontDesc')"
                :skills="frontendSkills"
              />
            </v-col>
            <v-col
              class="d-flex"
              cols="12"
              xl="3"
              sm="6"
              md="6"
              lg="3"
            >
              <v-divider vertical class="divider" dark/>
              <skill-item
                icon="/seo.svg"
                title="Backend"
                :subtitle="$t('skillsBackendDesc')"
                :skills="backendSkills"
              />
            </v-col>
            <v-col
              class="d-flex"
              cols="12"
              xl="3"
              sm="6"
              md="6"
              lg="3"
            >
              <v-divider vertical class="divider" dark/>
              <skill-item
                icon="/mobile-app.svg"
                :title="$t('appDevelopment')"
                :subtitle="$t('skillsAppDesc' )"
                :skills="appSkills"
              />
            </v-col>
            <v-col
              class="d-flex"
              cols="12"
              xl="3"
              sm="6"
              md="6"
              lg="3"
            >
              <v-divider vertical class="divider" dark/>
              <skill-item
                icon="/profit.png"
                title="Marketing"
                :subtitle="$t('skillsMarketingDesc')"
                :skills="marketingSkills"
              />
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsCards',
  data: () => ({
    frontendSkills: ['React', 'Nextjs', 'Vuejs', 'Nuxtjs', 'HTML', 'CSS'],
    backendSkills: ['TypeScript', 'JavaScript', 'Node', 'c#', 'ASP .NET Core'],
    appSkills: ['React Native', 'Flutter'],
    marketingSkills: ['Facebooks Adds', 'Google Adds', 'Spotify Adds']
  })
}
</script>

<style scoped>
.big-container {
  position: relative;
  height: 800px;
  width: 1440px ;
}
.skills-container {
  display: flex;
  position: absolute;
  height: auto;
  width: 100%;
  top: -50px;
  left:0;
  justify-content: center;
  align-items: center;
}

.skills {
  max-width: 90%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px #ccc;
  background-color: white;
  display: flex;
}

.divider {
  background-color: #ced9d9
}

@media (max-width: 1200px) {
  .skills {
    width: 70vw;
    height: 100%;
    border-radius: 20px;
    box-shadow: 1.5px 1.5px 1.5px 1.5px #ccc;
    background-color: white;
    display: flex;
    flex-direction: row;
  }

  .divider {
    background-color: #ced9d9
  }
}

@media (max-width: 1024px) {
  .skills {
    width: 80vw;
  }

  .skills-container {
    height: auto;
    margin-top: 25px;
  }
  .container {
    height: 1100px;
  }
}

@media (max-width: 800px) {
  .skills {
    width: 90vw;
  }
  .skills-container {
    top: -40px;
  }
  .container {
    height: 1200px;
  }
}

</style>
