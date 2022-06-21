<template>
    <div class="w-36 h-36 flex flex-col m-2 justify-evenly bg-grey rounded-xl hover:bg-yellow">
        <img class="max-h-20" :src="require(`@/assets/skills/${props.image}.svg`)" alt="img"/>
        <p>{{props.title}}</p>
    </div>
</template>
<script setup>
import {defineProps} from 'vue'

const props = defineProps({
    title: String,
    image: String
})

</script>