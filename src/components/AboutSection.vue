<template>
    <div class=" px-5 py-8 bg-secondary">
        <div class="container mb-8">
            <p class="text-left text-3xl">About</p>
            <p class="text-left"> <span class="w-16 h-1 rounded-md mr-4 mb-1 inline-block bg-yellow"></span>What can I
                say, I am a Systems
                Analysis student and programming nerd, I have been writing code
                since I was 14 years old and since then I have not stopped (which I feel very proud of). I have worked
                for different companies on lots of projects, I developed from a landing to a complete ERP. Currently I
                am working in a company
                remotely and developing as a freelance.
                <br />If you feel interested in my work, do not hesitate to contact me and have a coffee together!!
            </p>
        </div>
        <div>
            <p class="text-left text-3xl">My Skills</p>
            <div class="flex flex-wrap justify-center">

                <!-- Enviar solo el nombre del archivo dentro de la carpeta assets/skills, sin extension, se asume que es svg  -->
                <SkillSection image="netCore" title=".Net Core" />
                <SkillSection image="nest" title="NestJs" />
                <SkillSection image="vue" title="VueJs" />
                <SkillSection image="react" title="React" />
                <SkillSection image="node" title="nodeJs" />
            </div>
        </div>
    </div>
</template>
<script setup>
import SkillSection from "./SkillItem.vue";</script>