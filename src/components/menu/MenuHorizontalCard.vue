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
    class="bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-[0_8px_32px_0_rgba(14,75,49,0.08)] flex group"
  >
    <div class="w-1/3 relative overflow-hidden">
      <img
        :src="item.image"
        :alt="item.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div class="w-2/3 p-md flex flex-col justify-center bg-surface-container-lowest">
      <div class="flex justify-between items-start mb-sm">
        <h3 class="font-headline-sm text-headline-sm text-on-surface">{{ item.name }}</h3>
        <span class="font-headline-sm text-headline-sm text-primary">{{ item.price }}</span>
      </div>
      <p class="font-body-md text-body-md text-on-surface-variant mb-md">{{ item.description }}</p>
      <button
        type="button"
        class="mt-auto w-fit px-4 py-2 border border-primary/20 text-primary font-label-md text-label-md rounded-full hover:bg-primary/5 transition-colors"
      >
        Tambah
      </button>
    </div>
  </article>
</template>
