<template>
    <div class="relative w-56 h-56 m-2" >
        <div
            class="absolute inset-0 z-10 bg-grey text-center rounded-sm items-center flex flex-col justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
            <div class="h-32">
                <p class=" text-lg">{{ props.title }}</p>
                <p class="text-[10px]">{{ props.description }}</p>
            </div>
            <a class="w-20 p-1 flex justify-evenly items-center text-primary h-6 text-xs bg-yellow rounded-md" :href="props.url">
                Ver Mas
                <img class="w-3 h-3" src="@/assets/right-arrow.png" />
            </a>
        </div>
        <div class="relative h-full">
            <div class="flex h-full">
                <img :src="require(`@/assets/works/${props.image}`)" class="mx-auto object-fill rounded-sm" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    image: String,
    title: String,
    description: String,
    url: String
})
</script>