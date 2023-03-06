import { createRouter, createWebHistory } from 'vue-router'
//$ Importazioni
import MainView from '@/views/MainView.vue';
import Comuni from '@/views/ComuniPage.vue';
import Modulistica from '@/views/ModulisticaPage.vue';
import Amministrazione from '@/views/AmministrazionePage.vue';
import AlboPretorio from '@/views/AlboPretorioPage.vue';



const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainView
  },
  //TODO probabilmente dovrò cambiare queste rotte e fare /il-distretto/:sotto-rotte dinamiche es comuni, piano-di-zona... Al momento le faccio statiche
  {
    path: '/comuni',
    name: 'Comuni',
    component: Comuni,
  },
  {
    // path: '/piano-di-zona',
    // name: 'Comuni',
    // component: ()=> import(/*webpackChunkName: "comuni"*/ "@/views/ComuniPage.vue") //todo da creare,
  },
  {
    path: '/modulistica',
    name: 'Modulistica',
    component: Modulistica,
  },
  {
    path: '/amministrazione-trasparente',
    name: 'Amministrazione',
    component: Amministrazione,
  },
  {
    path: '/albo-pretorio',
    name: 'AlboPretorio',
    component: AlboPretorio,
  },
]





const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router