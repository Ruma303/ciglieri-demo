import { createRouter, createWebHistory } from 'vue-router'
//$ Importazioni
import MainView from '@/views/MainView.vue';
import Comuni from '@/views/ComuniPage.vue';
import Modulistica from '@/views/ModulisticaPage.vue';
import Amministrazione from '@/views/AmministrazionePage.vue';
import AlboPretorio from '@/views/AlboPretorioPage.vue';
import Segretariato from'@/views/SegretariatoPage.vue';


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
  //! Probabilmente dovrò creare una rotta genitore Servizi con i children delle voci.
  {
    path: '/segretariato',
    name: 'Segretariato',
    component: Segretariato,
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
  {
    //TODO Crea la rotta generica che rimanda alla homepage
  }
]





const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router