<template>
    <div class="fixed backdrop-blur-sm z-10 w-full top-0">
        <header class="desktop">
            <img src="../assets/logo.png" alt="logo" />
            <div class="links">
                <a>About</a>
                <a>Portfolio</a>
                <a>Contact</a>
            </div>
        </header>

        <header class="mobile">
            <img class="logo" src="../assets/logo.png" alt="logo" />
            <img class="menu" src="../assets/menu.png" alt="menu" @click="setOpen" />
        </header>
        <section v-if="open" class="menu-items h-screen">
            <div class="close-container" @click="setOpen">
                <img src="../assets/close.png" alt="close" />
            </div>
            <p class="text-yellow">Menu</p>
            <div class="items">
                <a>About</a>
                <a>Protfolio</a>
                <a>Contact</a>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    let open = ref(false);

    function setOpen () {
        open.value = !open.value;
    }
</script>

<style scoped lang="scss">

header {
    display: flex;
    padding: 1rem 2rem;
    justify-content: space-around;
    height: 5rem;
    align-items: flex-end;

    .links {
        width: 35rem;
        display: flex;
        justify-content: space-evenly;

        a {
            font-size: 1.5rem;
        }
    }
}


.desktop {
    display: none;
}

.mobile {
    justify-content: space-between;

    .logo {
        max-width: 3rem
    }

    .menu {
        width: 2rem;
    }
}

.menu-items {
    position: absolute;
    z-index: 100;
    width: 12rem;
    top: 0;
    right: 0;
    backdrop-filter: blur(5px);
    padding: 2rem 1rem 1rem 0;


    .close-container {
        width: 100%;
        display: flex;
        justify-content: end;
    }

    p {
        font-size: 1.8rem;
    }

    .items {
        padding: 0 1.5rem;

        a {
            display: block;
            line-height: 2rem;
            font-size: 1.2rem;
            text-align: left;
        }
    }
}
</style>