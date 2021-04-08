<template>
<div>

 <v-row >
    <v-col
    v-for="product in products"
    :key="product.name"
    >
<v-card
    
    class="mx-auto my-12 transparent "
    max-width="374"
    elevation="13"
  >
  <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
 
    <v-img
      height="250"
      :src="product.src"
    ></v-img>

    <v-card-title class="white--text">{{product.name}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
       <v-rating
          v-model="rating"
          :value="4.5"
          color="deep-purple accent-4"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
          large
        ></v-rating>

        <div class="grey--text ml-4">
          4.5 (413)
        </div>
      </v-row>
   
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title class="white--text">Tamanho disponiveis</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>36</v-chip>

        <v-chip>37</v-chip>

        <v-chip>39</v-chip>

        <v-chip>40</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple accent-4"
        text
        @click="aviso"
      >
        Reservar
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col>
</v-row>
</div>
 
 
     
</template>
<script>
 
export default {
    data(){
        return{
           products:[
            {src:'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',name:'tenis new balance', },
            {src:'https://images.unsplash.com/photo-1591045688751-cabef7431c02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',name:'tenis all star', },
            {src:'https://images.unsplash.com/photo-1547586877-0351a7143cbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',name:'tenis adidas', }
        ],
        }
    },
    methods:{
      aviso(){
        alert('produto reservado para voce')
      }
    }
}
</script>
 
 