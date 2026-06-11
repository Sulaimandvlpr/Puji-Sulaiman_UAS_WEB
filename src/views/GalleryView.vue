<script setup>
import { galleryImages } from '@/data/content'
</script>

<template>
  <main class="pt-32 pb-xl min-h-screen bg-surface text-on-surface font-body-md antialiased flex-grow">
    <header class="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
      <h1
        class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4"
      >
        Sudut Estetik Babe
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
        Jelajahi keindahan visual dari harmoni antara alam dan ruang urban di jantung kota. Setiap
        sudut dirancang untuk momen 'slow living' Anda.
      </p>
    </header>

    <section class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-md space-y-md">
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="break-inside-avoid relative group overflow-hidden rounded-[24px] shadow-[0_8px_32px_0_rgba(14,75,49,0.08)] bg-white"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  </main>
</template>
