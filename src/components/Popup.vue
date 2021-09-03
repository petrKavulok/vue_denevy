<template>
  <v-dialog max-width="600px" transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" text slot="activator" class="success">add a task</v-btn>
    </template>
    <template>
      <v-card>
          <v-card-title>
              <h2>Add a Task</h2>
          </v-card-title>

          <v-card-text>
              <v-form class="px-3">
                  <v-text-field label="Task" v-model="task" prepend-icon='mdi-pen'></v-text-field>
                  <v-text-field label="Person" v-model="person" prepend-icon='mdi-face'></v-text-field>

                    <v-menu v-model="menu" :close-on-content-click="false" max-width="290">
                            

                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-on="on" v-bind="attrs" slot="activator" label="Due Date" prepend-icon='mdi-calendar'></v-text-field>
                                <v-date-picker model="due" @change="menu = false"></v-date-picker>
                            </template>
                    </v-menu>


                  <v-btn text class="success mx-0 mt-3" @click="submit">Save</v-btn>
              </v-form>
          </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
data(){
    return {
        task: '',
        person: '',
        due: null,
        menu: true
    }
},
methods: {
    submit() {
        console.log(this.task, this.person, this.due)
    }
}
}
</script>

<style>

</style>



// <template>
//   <div class="home">
//     <h1 class="subheading grey--text">
//       Dashboard
//     </h1>
//     <v-btn class="pink white--text font-weight-bold d-lg-none hidden-sm-only">click me</v-btn>
//     <v-btn depressed color="pink">click me</v-btn>
//     <v-btn text color="pink">click me</v-btn>
//     <v-btn depressed class="pink white--text">
//       <v-icon left>mdi-email</v-icon>
//       <span>email me</span>
//     </v-btn>
//     <v-btn depressed small class="pink white--text">
//       <v-icon left>mdi-email</v-icon>
//       <span>email me</span>
//     </v-btn>
//     <v-btn depressed large class="pink white--text">
//       <span>email me</span>
//       <v-icon large right>mdi-email</v-icon>
//     </v-btn>
//      <v-btn fab depressed small dark color="purple">

//       <v-icon>mdi-heart</v-icon>
//     </v-btn>
//   </div>
// </template>