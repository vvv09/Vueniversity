<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  import HomeLayout from '@/layouts/HomeLayout'
  import MainLayout from '@/layouts/MainLayout'
  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || 'empty') + '-layout'
      }
    },
    components: {
      HomeLayout, MainLayout
    }
  }
</script>

<style lang="scss">
  @import 'assets/index.css';
</style>
