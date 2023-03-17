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

//* Famiglie e minori
import AssistenzaDomiciliareSocioEducativa from '@/views/Servizi/Famiglie e minori/AssistenzaDomiciliareSocioEducativa.vue';
import SpazioNeutroIncontriProtetti from '@/views/Servizi/Famiglie e minori/SpazioNeutroIncontriProtetti.vue';

//* Supporto per Anziani e Disabili
import AssistenzaDomiciliareIntegrata from '@/views/Servizi/Supporto per Anziani e Disabili/AssistenzaDomiciliareIntegrata.vue';
import CentroDiurnoAlzheimer from '@/views/Servizi/Supporto per Anziani e Disabili/CentroDiurnoAlzheimer.vue';
//import AssistenzaDomiciliareIntegrata from '@/views/Servizi/Supporto per Anziani e Disabili/AssistenzaDomiciliareIntegrata.vue';


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

  //* Famiglie e minori
  {
    path: '/assistenza-domiciliare-socio-educativa',
    name: 'AssistenzaDomiciliareSocioEducativa',
    component: AssistenzaDomiciliareSocioEducativa,
  },
  {
    path: '/spazio-neutro-incontri-protetti',
    name: 'SpazioNeutroIncontriProtetti',
    component: SpazioNeutroIncontriProtetti,
  },

  //* Supporto per Anziani e Disabili
  {
    path: '/assistenza-domiciliare-integrata',
    name: 'AssistenzaDomiciliareIntegrata',
    component: AssistenzaDomiciliareIntegrata,
  },
   {
    path: '/centro-diurno-alzheimer',
    name: 'CentroDiurnoAlzheimer',
    component: CentroDiurnoAlzheimer,
  },
/*   {
    path: '/pronto-intervento-sociale',
    name: 'ProntoInterventoSociale',
    component: ProntoInterventoSociale,
  }, */




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