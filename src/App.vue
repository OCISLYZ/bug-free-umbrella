<template>
  <div id="app">
    <Navbar v-if="!this.$route.meta.hideNavbar" />
    <Sidemenu v-if="!this.$route.meta.hideNavbar" />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidemenu from '@/components/Sidemenu.vue'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    Navbar,
    Sidemenu
  }
}
</script>

<style>
</style>
