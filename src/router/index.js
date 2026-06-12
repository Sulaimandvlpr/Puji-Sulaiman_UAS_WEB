import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // Kosongkan saja di dalam kurungnya agar otomatis mendeteksi rute hash dasar
  history: createWebHashHistory(), 
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
    // ... rute lainnya biarkan saja
  ]
})

export default router