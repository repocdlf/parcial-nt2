import Vue from  'vue'
import VueRouter from 'vue-router'

import Formulario from "./components/Formulario.vue";
import Login from "./components/Login.vue";

Vue.use(VueRouter)

//export const router = new VueRouter({
export default new VueRouter({
    mode: 'history',
    routes: [
      {path: '/', redirect: '/Formulario'},
      {path: '/formulario', component: Formulario},
      {path: '/login', component: Login}
    ]
})
