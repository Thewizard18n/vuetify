<template>
<div class="py-15">
      <v-app-bar app color='black'>
      <v-toolbar-title class='white--text'>Js calçados</v-toolbar-title>

      <v-spacer></v-spacer>
  
      <v-chip
      class="ma-2"
      color="deep-purple accent-4"
      outlined
    >
      <v-icon left>
        mdi-account-outline
      </v-icon>
      admin account
    </v-chip>

    <v-badge
        bordered
        bottom
        color=" green accent-4"
        dot
        offset-x="10"
        offset-y="10"
      >
    <v-menu offset-y >
      <template  v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
         <v-avatar>
              <v-img  src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
        </v-avatar>
        </v-btn>
      </template>
      <v-list class="deep-purple accent-4">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
         
        >
         <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
           <router-link class='text-decoration-none white--text' :to="`${item.href}`">{{ item.title }}</router-link>
          </v-list-item-content>
 
        </v-list-item>

          <div class="pa-2" >
          <v-btn class="white--text black" block>
            Logout
          </v-btn>
        </div>
      </v-list>
      
    </v-menu>
      </v-badge>
</v-app-bar>
     
 
</div>
</template>
<script>
export default {
    data(){
        return{
        items: [
              { title: 'Dashboard', icon: 'mdi-view-dashboard', href: '/dashboard' },
              { title: 'About', icon: 'mdi-account-box', href: '/about' },
              { title: 'My store', icon: 'mdi-store', href: '/mystore' },
        ],
      }
        }
}
</script>