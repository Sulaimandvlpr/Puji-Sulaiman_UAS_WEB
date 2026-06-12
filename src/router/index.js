import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from '../views/GalleryView.vue'

const router = createRouter({
  history: createWebHashHistory('/Puji-Sulaiman_UAS_WEB/'),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/menu', name: 'menu', component: MenuView },
    { path: '/tentang', name: 'tentang', component: AboutView },
    { path: '/galeri', name: 'galeri', component: GalleryView },
  ]
})

export default router