<template>
 <v-container>
<v-row no-gutters>
    <v-col
    >
        <v-card
        class="mt-2"
        color="deep-purple accent-4"
        dark
        max-width="400"

        >
        <v-card-title>
        <v-icon
        large
        left
        >
        {{user.icon}}
        </v-icon>
        <span class="title font-weight-light">{{user.media}}</span>
        </v-card-title>

        <v-card-text class="headline font-weight-bold">
        {{user.text}}
        </v-card-text>

        <v-card-actions>
        <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
        <v-img
        class="elevation-6"
        alt=""
        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        ></v-img>
        </v-list-item-avatar>

             <v-list-item-content>
                 <v-list-item-title>{{user.name}}</v-list-item-title>
             </v-list-item-content>
           </v-list-item>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
 
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        user:{
            type: Object
        }
    }
}
</script>