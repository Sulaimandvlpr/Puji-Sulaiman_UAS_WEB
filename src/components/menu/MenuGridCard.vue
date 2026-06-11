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
    class="bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-[0_8px_32px_0_rgba(14,75,49,0.08)] flex flex-col group hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-primary/10"
  >
    <div class="aspect-[4/3] overflow-hidden relative">
      <img
        :src="item.image"
        :alt="item.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div
        v-if="item.badge"
        class="absolute top-sm right-sm bg-surface-bright/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-primary shadow-sm"
      >
        {{ item.badge }}
      </div>
    </div>
    <div class="p-md flex flex-col flex-grow">
      <h3 class="font-headline-sm text-headline-sm text-on-surface mb-xs">{{ item.name }}</h3>
      <p class="font-body-md text-body-md text-on-surface-variant flex-grow mb-md">
        {{ item.description }}
      </p>
      <div class="flex justify-between items-center mt-auto">
        <span class="font-headline-sm text-headline-sm text-primary">{{ item.price }}</span>
        <button
          type="button"
          :aria-label="`Tambah ${item.name}`"
          class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
        >
          <span class="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  </article>
</template>
