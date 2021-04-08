<template>
    <v-app>
    <v-main class="app">
     <router-view/>
    </v-main>
    </v-app>
  
</template>

<script>
export default {
  
  name: 'App',

  components: {
 
  },

  data(){
    return{
        
    }
}
}
</script>
<style lang="scss">
@import './src/scss/variables.scss';
.app{
  background:$background-color;
}
</style>
 
