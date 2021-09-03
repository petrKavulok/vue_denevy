<template>
  <div class="project">
    <h1 class="subheading grey--text mt-3">Home</h1>
    <v-container class="my-5">
      
        <v-card flat  class="pa-5" align="center">
             <v-form ref="form" class="px-3 mx-5 form " >

                  <v-text-field label="Project" v-model="title" :rules="taskRules" prepend-icon='mdi-pen'></v-text-field>

                  <v-text-field label="Person" v-model="person" prepend-icon='mdi-face' :rules="generalRules"></v-text-field>
                  
                  <v-select v-model="status" :items="items" :rules="generalRules" label="Status" prepend-icon='mdi-list-status' required ></v-select>

                  <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y  max-width="290px" min-width="auto" >
        
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field v-model="date" label="Due date" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" ></v-text-field>
                    </template>
                    
                    <v-date-picker v-model="date" type="month" no-title scrollable>

                      <v-spacer></v-spacer>

                      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                      
                    </v-date-picker>
                  </v-menu>

                  <v-btn text class="success mx-0 mt-3" @click="submit">Save</v-btn>
              </v-form>
            <p class="mt-5" >{{ message ? message : '' }} </p>
        </v-card>
    </v-container>
  </div>
</template>


<script>
import axios from "axios";


const baseURL = 'http://localhost:3000/tasks';

export default {
  components:{ },
    data(){
      return {
        title: '',
        person: '',
        status: '',
        items: [
          'ongoing',
          'complete',
          'overdue'
        ],
        taskRules: [
          v => !!v || 'No title, no fun',
          v =>  v.length >= 5 || `Try a little harder, only ${ 5- v.length} more ${ v.length === 4 ? 'character' : 'characters' }`
        ],
        generalRules:  [
          v => !!v || 'You forgot something important >:('
        ],
        date: new Date().toISOString().substr(0, 7),
        menu: false,
        modal: false,
        projects:  [],
        message: ''
      }
    },
    async created() {
      try{
        const res = await axios.get(baseURL);
        this.projects = res.data;
      } catch(e) {
        console.error(e);
      }
    },
    methods:  {
      async submit(){
        if (this.$refs.form.validate()){
          await axios.post(baseURL, { title: this.title, person: this.person, due: this.date, status: this.status });
          this.$refs.form.reset();
          this.message = 'Congrats! New project has been added to the project page'
        } else {
          this.message = 'Please follow the rules'
        }
      }
    }
  }
</script>

<style>
.form {
  max-width: 500px;
}
</style>