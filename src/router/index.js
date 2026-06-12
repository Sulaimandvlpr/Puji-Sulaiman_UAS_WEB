import { createRouter, createWebHashHistory } from 'vue-router' // 1. DIUBAH DI SINI

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // 2. DIUBAH DI SINI
  scrollBehavior() {
    return { top: 0 }
  },
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
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title ?? 'Babe Jakarta'
})

export default router