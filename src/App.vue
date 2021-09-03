<template>
  <v-app class="gray lighten-4">
    <NavBar />
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { NavBar, Footer },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style >
html{
  background: grey;
}
</style>