<template>
    <nav class="navbar orange lighten-1">
        <div class="nav-wrapper">
            <div class="navbar-left">
                <a href="#" @click.prevent="$emit('click')">
                    <i class="material-icons black-text">меню</i>
                </a>
            </div>
            <div id="logo">

                    <em>Vue</em>ниверситет

            </div>
            <a href="#" class="black-text" @click.prevent="$router.push('/')">
                <i class="material-icons black-text">выйти</i>
            </a>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
        methods: {

        }
    }
</script>

<style scoped>
    #logo {
        color: black;
        font-size: 70px;
    }
    #logo em {
        color: green;
    }
</style>