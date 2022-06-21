<template>
    <div class="h-screen bg-primary shadow-xl">
        <AppBarSection />
        <div class="grid sm:grid-cols-1 md:grid-cols-2 h-full">
            <div class="h-full flex justify-center items-center">
                <div class="col-span-1 h-56 flex flex-col justify-evenly items-center">
                    <p class="text-2xl">I'M <span class="text-yellow text-4xl">Marcos Escobar</span> FullStack Developer</p>
                    <button class="outline outline-4 outline-yellow rounded text-yellow w-48 h-12 text-lg">
                        Contact Me
                    </button>
                </div>
            </div>
            <div class=" col-span-1 h-full flex flex-col justify-end items-end p-5">
                <div class="absolute bottom-3 right-3 flex flex-col items-center">
                    <div class="w-2 h-28 bg-yellow rounded-md mb-3"></div>
                    <img class="max-h-7 my-2" src="@/assets/signo-de-github.png" alt="github" />
                    <img class="max-h-7 my-2" src="@/assets/instagram.png" alt="instagram" />
                    <img class="max-h-7 my-2" src="@/assets/whatsapp.png" alt="whatsapp" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import AppBarSection from './AppBarSection.vue';
</script>

<style scoped lang="scss">
</style>