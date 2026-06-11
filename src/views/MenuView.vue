<script setup>
import { ref, computed } from 'vue'
import { images, menuCategories, menuSections } from '@/data/content'
import MenuGridCard from '@/components/menu/MenuGridCard.vue'
import MenuFeaturedCard from '@/components/menu/MenuFeaturedCard.vue'
import MenuCompactCard from '@/components/menu/MenuCompactCard.vue'
import MenuHorizontalCard from '@/components/menu/MenuHorizontalCard.vue'

const activeCategory = ref('all')

const visibleSections = computed(() => {
  if (activeCategory.value === 'all') return menuSections
  return menuSections.filter((section) => section.id === activeCategory.value)
})

function categoryButtonClass(id) {
  return activeCategory.value === id
    ? 'snap-start flex-shrink-0 px-6 py-2 rounded-full bg-primary text-on-primary font-label-md text-label-md whitespace-nowrap transition-transform hover:scale-105'
    : 'snap-start flex-shrink-0 px-6 py-2 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md whitespace-nowrap transition-all hover:bg-primary/10 hover:text-primary'
}
</script>

<template>
  <div class="bg-background text-on-background font-body-md antialiased pt-[88px] flex-grow">
    <header class="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          :src="images.menuHeader"
          alt="Background"
          class="w-full h-full object-cover opacity-80 mix-blend-multiply filter contrast-125"
        />
        <div class="absolute inset-0 bg-surface/40 backdrop-blur-sm" />
      </div>
      <div class="relative z-10 text-center px-margin-mobile">
        <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-sm">
          Koleksi Rasa Babe
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Temukan perpaduan harmoni antara energi metropolitan Jakarta dan ketenangan sanctuary
          botani dalam setiap sajian kami.
        </p>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
      <div class="flex overflow-x-auto gap-sm pb-md mb-lg scrollbar-hide snap-x">
        <button
          v-for="category in menuCategories"
          :key="category.id"
          type="button"
          :class="categoryButtonClass(category.id)"
          @click="activeCategory = category.id"
        >
          {{ category.label }}
        </button>
      </div>

      <section v-for="section in visibleSections" :key="section.id" class="mb-xl">
        <div class="flex items-center gap-sm mb-lg">
          <h2 class="font-headline-md text-headline-md text-primary">{{ section.title }}</h2>
          <div class="flex-grow h-px bg-outline-variant/30" />
        </div>

        <div
          v-if="section.layout === 'grid'"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md md:gap-lg"
        >
          <MenuGridCard v-for="item in section.items" :key="item.name" :item="item" />
        </div>

        <div v-else-if="section.layout === 'featured'" class="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <MenuFeaturedCard v-for="item in section.items" :key="item.name" :item="item" />
        </div>

        <div
          v-else-if="section.layout === 'compact'"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm md:gap-md"
        >
          <MenuCompactCard v-for="item in section.items" :key="item.name" :item="item" />
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-lg">
          <MenuHorizontalCard v-for="item in section.items" :key="item.name" :item="item" />
        </div>
      </section>
    </main>
  </div>
</template>
