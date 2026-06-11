import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
