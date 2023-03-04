import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
const routes = [
  { //*HOMEPAGE con le news e gli avvisi
    path: '/',
    name: 'Home',
    component: MainView
  },
  //TODO probabilmente dovró cambiare queste rotte e fare /il-distretto/:sottorotte dinamiche es comuni, piano-di-zona... Al momento le faccio statiche
  { //*I Comuni
    path: '/comuni',
    name: 'Comuni',
    component: ()=> import(/*webpackChunkName: "comuni"*/ "@/views/ComuniPage.vue"),
  },
  { //*Piano di zona
    path: '/piano-di-zona',
   // name: 'Comuni',
    //component: ()=> import(/*webpackChunkName: "comuni"*/ "@/views/ComuniPage.vue"),
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router