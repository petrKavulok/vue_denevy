<template>
  <v-footer>
      <v-row
      justify="center" no-gutters class="gray lighten-2 text-center  text-uppercase grey--text"
    >
      <v-btn
        v-for="link in links" :key="link" color="grey" text 
        router :to="link.route"
        class=" caption"
      >
        {{ link.name }}
      </v-btn>
      <v-col
        class="lighten-2 text-center caption"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>denevy</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
    data(){
        return {
            links: [
                {name: 'Helpdesk' , route: '/helpdesk' },
                {name: 'GDPR' , route: '/GDPR' },
                {name: 'Media' , route: '/media' },
                {name: 'Company registration' , route: '/reg' },

            ]
        }
    }
}
</script>

<style>

</style>