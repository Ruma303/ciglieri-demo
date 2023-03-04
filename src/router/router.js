import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import Comuni from '../components/homepage/ComuniPage.vue'
const routes = [
  { //*HOMEPAGE
    path: '/',
    name: 'Home',
    component: MainView
  },
  //TODO probabilmente dovró cambiare queste rotte e fare /il-distretto/:sottorotte dinamiche es comuni, piano-di-zona... Al momento le faccio statiche
  { //*I Comuni
    path: '/comuni',
    name: 'Comuni',
    component: Comuni
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router