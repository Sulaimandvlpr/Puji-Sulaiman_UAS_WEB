<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-[0_8px_32px_0_rgba(14,75,49,0.08)] flex flex-col md:flex-row group hover:shadow-lg transition-all duration-300 border border-transparent hover:border-secondary/20"
  >
    <div class="w-full md:w-2/5 relative overflow-hidden bg-surface-variant">
      <img
        :src="item.image"
        :alt="item.name"
        class="w-full h-full object-cover min-h-[250px] group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div class="w-full md:w-3/5 p-md md:p-lg flex flex-col justify-center">
      <div
        v-if="item.recommendation"
        class="inline-flex items-center gap-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full font-label-sm text-label-sm w-fit mb-sm"
      >
        <span class="material-symbols-outlined text-[16px]">stars</span>
        Chef's Recommendation
      </div>
      <h3 class="font-headline-md text-headline-md text-on-surface mb-sm">{{ item.name }}</h3>
      <p class="font-body-lg text-body-lg text-on-surface-variant mb-md">{{ item.description }}</p>
      <div class="flex items-center gap-md mt-auto">
        <span class="font-display-lg-mobile text-display-lg-mobile text-primary">{{ item.price }}</span>
        <button
          type="button"
          class="flex-grow bg-surface border border-outline bg-opacity-50 backdrop-blur-sm text-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary hover:text-on-primary hover:border-transparent transition-all shadow-sm"
        >
          Tambah ke Pesanan
        </button>
      </div>
    </div>
  </article>
</template>
