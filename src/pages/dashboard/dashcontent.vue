<template>
<v-container >
  <v-row  >
    <v-col>
      <CardComments :user="user" v-for="user in users" :key="user.name"/>
   </v-col>
    <v-col >
      <v-card
    class="mx-auto text-center"
    color="0f0f0f"
    dark
    max-width="800"
  >
    <v-card-text>
      <v-sheet color="#0f0f0f">
        <v-sparkline
          :value="value"
          color="deep-purple accent-4"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template  v-slot:label="item">
            ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin">
        Vendas nas ultimas 24h
      </div>
    </v-card-text>
      </v-card>
      <v-card
    class="mt-4 mx-auto"
    max-width="400"
    dark
    color="#0f0f0f"
  >
    <v-sheet
      class=" mx-auto"
      color="deep-purple accent-4"
      elevation="12"
      max-width="calc(100% - 32px)"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">
        alcance
      </div>
      <div class="subheading font-weight-light grey--text">
        ultimas horas
      </div>
      <v-divider class="my-2"></v-divider>
      <v-icon
        class="mr-2"
        small
      >
        mdi-clock
      </v-icon>
      <span class="caption grey--text font-weight-light">ultima visualizacao 26 minutos atras</span>
    </v-card-text>
  </v-card>
    </v-col>
  
 
  </v-row>
</v-container>
</template>
<script>
import CardComments from './cardcomments'
  export default {
    data(){
      return{
      
      users:[
        {icon:'mdi-twitter',media:'twitter',text:'tenis legais',name:'gustavo henrique'},
        {icon:'mdi-facebook',media:'facebook',text:'entrega rapida',name:'sandro'},
        {icon:'mdi-instagram',media:'instagram',text:'bem confortaveis',name:'henrique'}
      ]
      }
    },
    props:{
      value:{
        type:Number
      }
    },
    components:{
      CardComments
    }
  }
</script>