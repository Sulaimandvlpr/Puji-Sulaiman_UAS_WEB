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
    class="bg-surface-container-lowest rounded-[24px] p-sm shadow-[0_8px_32px_0_rgba(14,75,49,0.08)] flex flex-col group hover:-translate-y-1 transition-transform duration-300"
  >
    <div class="aspect-square overflow-hidden rounded-xl mb-sm relative">
      <img
        :src="item.image"
        :alt="item.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div class="flex flex-col flex-grow px-2 pb-2">
      <h3 class="font-headline-sm text-headline-sm text-on-surface mb-xs">{{ item.name }}</h3>
      <p class="font-body-md text-body-md text-on-surface-variant flex-grow mb-sm line-clamp-2">
        {{ item.description }}
      </p>
      <div class="flex justify-between items-center mt-auto">
        <span class="font-headline-sm text-headline-sm text-primary">{{ item.price }}</span>
        <button
          type="button"
          :aria-label="`Tambah ${item.name}`"
          class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
        >
          <span class="material-symbols-outlined text-[18px]">add</span>
        </button>
      </div>
    </div>
  </article>
</template>
