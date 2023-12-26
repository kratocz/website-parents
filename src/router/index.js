import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HowToControlPhoneView from '../views/HowToControlPhoneView.vue'
import AddressesView from '../views/AddressesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/old-home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/how-to-control-iPhone',
      name: 'how-to-control-iPhone',
      component: HowToControlPhoneView
    },
    {
      //path: '/addresses',
      path: '/',
      name: 'addresses',
      component: AddressesView
    },
  ]
})

export default router
