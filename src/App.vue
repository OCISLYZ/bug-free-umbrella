<template>
  <div id="app">
    <Sidemenu v-if="!this.$route.meta.hideNavbar" />
    <router-view />
  </div>
</template>

<script>
import Sidemenu from '@/components/Sidemenu.vue'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    Sidemenu
  }
}
</script>

<style>
#app {
  display: flex;
  overflow: hidden;
}
</style>
