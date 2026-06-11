<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppNav from '@/components/layout/AppNav.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const route = useRoute()

const footerVariant = computed(() => route.meta.footerVariant ?? 'compact')
</script>

<template>
  <div
    class="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary"
  >
    <AppNav />
    <RouterView class="flex-grow" />
    <AppFooter :variant="footerVariant" />
  </div>
</template>
