import { createRouter, createWebHistory } from 'vue-router'
//$ Importazioni
import MainView from '@/views/MainView.vue';
import Comuni from '@/views/ComuniPage.vue';
import Modulistica from '@/views/ModulisticaPage.vue';
import Amministrazione from '@/views/AmministrazionePage.vue';

//* Ricevi aiuto
import SegretariatoSociale from '@/views/Servizi/Ricevi aiuto/SegretariatoPage.vue';
import PuntoUnicoAccesso from '@/views/Servizi/Ricevi aiuto/PuntoUnicoAccesso.vue';
import ProntoInterventoSociale from '@/views/Servizi/Ricevi aiuto/ProntoInterventoSociale.vue';


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
  //* Ricevi aiuto routes
  {
    path: '/segretariato-sociale',
    name: 'SegretariatoSociale',
    component: SegretariatoSociale,
  },
  {
    path: '/punto-unico-accesso',
    name: 'PuntoUnicoAccesso',
    component: PuntoUnicoAccesso,
  },
  {
    path: '/pronto-intervento-sociale',
    name: 'ProntoInterventoSociale',
    component: ProntoInterventoSociale,
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
    //TODO Crea la rotta generica che rimanda alla homepage
  }
]





const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router