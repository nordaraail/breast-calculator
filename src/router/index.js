import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home.vue";
import Layout from '@/layouts/HeaderAsideLayout/index.js'
import Calculator from '@/views/calculator.vue'
import Result from '@/views/result.vue'
import Support from '@/views/support.vue'
import Notfound from '@/views/Notfound.vue'
//import Home from '@/views/home'
Vue.use(VueRouter);

const routes =  [
  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect:'/home',
    children:[
      {
        path: '/home',
        name: 'Home',
        component:Home
      },
      {
        path: '/calculator',
        name: 'Calculator',
        component:Calculator
      },
      {
        path: '/result',
        name: 'Result',
        component:Result
      },
      {
        path: '/support',
        name: 'Support',
        component:Support
      }
      
    ]
  },

];

const router = new VueRouter({
  mode: "hash",
  base: import.meta.env.BASE_URL,
  routes,
});

export default router;
