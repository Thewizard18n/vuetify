import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '@/pages/about/about'
import dashboard from '@/pages/dashboard/dashboard'
import store from '@/pages/store/store'      

Vue.use(VueRouter)

export default new VueRouter({
    mode:"history",
    routes:[
      {path: '/dashboard', component: dashboard },
      {path: '/about', component: about },
      {path: '/mystore', component: store },
    ]
  })