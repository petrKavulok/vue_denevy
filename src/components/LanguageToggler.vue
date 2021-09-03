<template>
    <v-container class="lang">
        <v-select class="lang caption" v-model="lang" :items="items" item-text="lang" item-value="value" label="Language" prepend-icon='mdi-web' required @change="handleChange($event)">
        </v-select>
    </v-container>
</template>

<script>
export default {


 data(){
    const lang = localStorage.getItem('lang') || 'en' ;
     return{
         items: [
             {lang: 'English', value:'en'},
             {lang: 'Česky', value:'cs'}
         ],
         lang: lang
 
     }
 },
 methods: {
     handleChange(event){
         console.log(event)
         localStorage.setItem('lang', event);
         window.location.reload();
     }
    }
}
</script>

<style>
.lang{
    max-width: 150px;
}
</style>