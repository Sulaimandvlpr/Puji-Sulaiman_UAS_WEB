import { createRouter, createWebHistory } from 'vue-router'

// Salin rute kamu yang sudah ada, sesuaikan base history-nya
const router = createRouter({
  history: createWebHistory('/Puji-Sulaiman_UAS_WEB/'), // Isi dengan nama repo kamu
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Babe - Tempat Pelarian Urban di Senopati',
        footerVariant: 'full',
      },
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('@/views/MenuView.vue'),
      meta: {
        title: 'Menu - Cafe Babe',
        footerVariant: 'compact',
      },
    },
    {
      path: '/tentang',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: 'Contact & About Us - Babe Jakarta',
        footerVariant: 'about',
      },
    },
    {
      path: '/galeri',
      name: 'gallery',
      component: () => import('@/views/GalleryView.vue'),
      meta: {
        title: 'Sudut Estetik Babe - Botanica Coffee',
        footerVariant: 'gallery',
      },
    },
  ]
})

router.afterEach((to) => {
  document.title = to.meta.title ?? 'Babe Jakarta'
})

export default router