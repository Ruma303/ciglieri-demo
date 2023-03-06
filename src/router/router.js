import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue';
import Modulistica from '@/views/ModulisticaPage.vue';



const routes = [
  { //*HOMEPAGE con le news e gli avvisi
    path: '/',
    name: 'Home',
    component: MainView
  },
  //TODO probabilmente dovrò cambiare queste rotte e fare /il-distretto/:sotto-rotte dinamiche es comuni, piano-di-zona... Al momento le faccio statiche
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
  {
    path: '/modulistica',
    name: 'Modulistica',
    component: ()=> import(/*webpackChunkName: "modulistica"*/ "@/views/ModulisticaPage.vue"),
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router