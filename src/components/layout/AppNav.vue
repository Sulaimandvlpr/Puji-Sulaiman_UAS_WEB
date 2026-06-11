<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navLinks = [
  { name: 'home', label: 'Home', to: '/' },
  { name: 'menu', label: 'Menu', to: '/menu' },
  { name: 'about', label: 'About', to: '/tentang' },
  { name: 'gallery', label: 'Gallery', to: '/galeri' },
]

const activeRoute = computed(() => route.name)

function linkClass(name) {
  const isActive = activeRoute.value === name
  return isActive
    ? 'font-label-md text-label-md text-primary dark:text-primary-fixed-dim border-b-2 border-primary dark:border-primary-fixed-dim pb-1 px-3 py-2'
    : 'font-label-md text-label-md text-on-surface-variant dark:text-on-tertiary-container hover:text-primary transition-colors hover:bg-primary-container/10 dark:hover:bg-primary-container/20 px-3 py-2 rounded-lg transition-all'
}
</script>

<template>
  <nav
    class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(14,75,49,0.08)]"
  >
    <div
      class="flex justify-between items-center max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-4"
    >
      <RouterLink
        to="/"
        class="font-display-lg text-display-lg-mobile md:text-display-lg font-bold text-primary dark:text-primary-fixed-dim tracking-tight"
      >
        Babe
      </RouterLink>

      <div class="hidden md:flex items-center space-x-8">
        <RouterLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.to"
          :class="linkClass(link.name)"
        >
          {{ link.label }}
        </RouterLink>
      </div>

      <button
        type="button"
        class="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary/90 scale-95 active:opacity-80 transition-transform shadow-[0_4px_14px_0_rgba(14,75,49,0.2)]"
      >
        Pesan Sekarang
      </button>
    </div>
  </nav>
</template>
