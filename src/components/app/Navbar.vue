<template>
    <nav class="navbar orange lighten-1">
        <div class="nav-wrapper">
            <div class="navbar-left">
                <a href="#" @click.prevent="$emit('click')">
                    <i class="material-icons black-text">Vueниверситет</i>
                </a>
            </div>
            <a href="#" class="black-text" @click.prevent="$router.push('/')">
                Выйти
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

</style>