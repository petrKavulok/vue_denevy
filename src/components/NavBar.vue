<template>
  <nav>
      <v-app-bar app flat>
          <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="text-uppercase grey--text">

                <router-link to="/" class="headline">
                <p class="headline grey--text mb-0 bold--text" @click="drawer = false">{{ $t('headline') }}</p>
                </router-link>

          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn v-for="(social, j) in socials" :key="j" icon class="round" :href="social.link">
            <v-icon> {{social.icon}} </v-icon>
            </v-btn>
      </v-app-bar>
      <v-divider></v-divider>

      <v-navigation-drawer v-model="drawer" app class="primary">
        <v-list>
            <v-list-item-group>
                <v-list-item v-for="(link, i) in links" :key="i" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">
                            {{ link.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
    data() {
    return {
        drawer: false,
        links: [
            { icon: 'mdi-home-circle', text: 'Home', route:'/'},
            { icon: 'mdi-file-multiple', text: 'Projects', route:'/projects'},
            { icon: 'mdi-account-group', text: 'Contact', route:'/contact'},
        ],
        socials:  [
            { icon: 'mdi-instagram', link: 'https://www.instagram.com/denevyeu/'},
            { icon: 'mdi-twitter', link: 'https://twitter.com/denevyeu'},
            { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/company/denevy/'},
            
        ]
    }
}}
</script>

<style>
.headline{
    text-decoration: none;
}
</style>