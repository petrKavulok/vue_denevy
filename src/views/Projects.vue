<template>
  <div class="project">
    <v-layout class="d-flex justify-center" tile>
        <h1 class="subheading grey--text mt-3">Projects</h1>
        <v-spacer></v-spacer>
        <LanguageToggler />
    </v-layout>

    <v-container class="my-5">
        <v-card flat  class="pa-5 ">
            <v-layout row wrap v-for="project in projects" :key="project.id" class="blue lighten-5 pa-3 mb-3">
                <v-flex  xs12 md6>
                    <div class="caption grey--text">Project title</div>
                    <div class="">{{project.title}}</div>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Teamlead</div>
                    <div class="">{{project.person}}</div>
                </v-flex>
                <v-flex xs4 sm4 md2>
                    <div class="caption grey--text">Due by</div>
                    <div class="">{{project.due}}</div>
                </v-flex>
                <v-flex xs2 sm4 md2>
                    <div class="caption grey--text">Status</div>
                    <div class="">{{project.status}}</div>
                </v-flex>
                <v-divider></v-divider>
            </v-layout>
        </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import LanguageToggler from '../components/LanguageToggler.vue';

export default {
components:{ LanguageToggler },
  data(){
    return {
      projects:  [],
    }
  },
  async created() {
    try{
      const res = await axios.get(`http://localhost:3000/tasks`);
      this.projects = res.data;
    } catch(e) {
      console.error(e);
    }
  }
}
</script>

<style>
</style>