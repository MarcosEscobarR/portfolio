<template>
<div class="w-screen">
    <HomeSection />
    <AboutSection/>
    <ProtfolioSection/>
    <ExperienceSection/>
</div>
</template>

<script setup>
import  HomeSection  from "./components/HomeSection.vue";
import './styles/app.css';
import AboutSection from "./components/AboutSection.vue";
import ProtfolioSection from "./components/ProtfolioSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue"; // Here

</script>

<style>
#app {
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

</style>
