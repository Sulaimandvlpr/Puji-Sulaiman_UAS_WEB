<script setup>
import { images } from '@/data/content'
</script>

<template>
  <main
    class="flex-grow pt-[100px] pb-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full bg-surface text-on-surface font-body-md antialiased"
  >
    <section class="mb-xl text-center md:text-left">
      <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-sm">
        Cerita Kami &amp; Lokasi
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        Menemukan oase ketenangan di tengah hiruk-pikuk Senopati. Babe Jakarta adalah tempat di
        mana kopi berkualitas bertemu dengan suasana botani yang menyegarkan.
      </p>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <div
        class="col-span-1 md:col-span-8 bg-surface-container-lowest rounded-2xl shadow-[0_8px_32px_0_rgba(14,75,49,0.08)] overflow-hidden relative min-h-[400px]"
      >
        <img
          :src="images.map"
          alt="Map"
          class="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply"
        />
        <div class="absolute bottom-md left-md right-md glass-panel p-md rounded-xl">
          <h3 class="font-headline-sm text-headline-sm text-primary mb-xs">Senopati Sanctuary</h3>
          <p class="font-body-md text-body-md text-on-surface">
            Jl. Senopati Raya No. 45, Kebayoran Baru, Jakarta Selatan, 12190
          </p>
        </div>
      </div>

      <div class="col-span-1 md:col-span-4 flex flex-col gap-gutter">
        <div
          class="bg-surface-container-lowest rounded-2xl p-md shadow-[0_8px_32px_0_rgba(14,75,49,0.08)] flex-grow flex flex-col justify-center"
        >
          <div class="flex items-center gap-sm mb-md">
            <div
              class="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary"
            >
              <span class="material-symbols-outlined filled">schedule</span>
            </div>
            <h3 class="font-headline-sm text-headline-sm text-primary">Jam Operasional</h3>
          </div>
          <ul class="space-y-sm">
            <li
              class="flex justify-between font-body-md text-body-md text-on-surface-variant border-b border-primary/10 pb-sm"
            >
              <span>Senin - Jumat</span>
              <span class="font-medium text-primary">08.00 - 22.00</span>
            </li>
            <li
              class="flex justify-between font-body-md text-body-md text-on-surface-variant pt-xs"
            >
              <span>Sabtu - Minggu</span>
              <span class="font-medium text-primary">08.00 - 23.00</span>
            </li>
          </ul>
        </div>

        <a
          href="#"
          class="bg-primary rounded-2xl p-md shadow-[0_8px_32px_0_rgba(14,75,49,0.08)] text-on-primary hover:bg-primary-container transition-colors group flex items-center justify-between"
        >
          <div>
            <p class="font-label-md text-label-md text-on-primary/80 mb-xs">Ikuti Perjalanan Kami</p>
            <h3 class="font-headline-sm text-headline-sm font-bold">@BabeJakarta</h3>
          </div>
          <span
            class="material-symbols-outlined text-4xl group-hover:translate-x-1 transition-transform"
          >
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  </main>
</template>
