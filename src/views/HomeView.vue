<script setup>
import { images } from '@/data/content'
</script>

<template>
  <main class="bg-background text-on-background font-body-md antialiased overflow-x-hidden flex-grow">
    <!-- Hero Section -->
    <section
      class="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 px-margin-mobile md:px-margin-desktop bg-cover bg-center"
      :style="{ backgroundImage: `url('${images.hero}')` }"
    >
      <div class="absolute inset-0 bg-surface/30 backdrop-blur-sm" />
      <div
        class="relative z-10 max-w-4xl mx-auto text-center glass-panel p-8 md:p-16 rounded-[32px] shadow-[0_24px_64px_-12px_rgba(14,75,49,0.15)]"
      >
        <span
          class="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-container/10 text-primary font-label-sm text-label-sm uppercase tracking-wider backdrop-blur-md"
        >
          Est. 2026 • Blok M
        </span>
        <h1
          class="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight"
        >
          Tempat Pelarian Urban di BlokM
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
          Nikmati kopi premium di tengah kesejukan hutan kota Jakarta. Ruang sempurna untuk
          berkreasi, bersosialisasi, atau sekadar mengambil jeda sejenak.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <RouterLink
            to="/tentang"
            class="w-full sm:w-auto bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-full hover:bg-primary/90 transition-all shadow-[0_8px_24px_-4px_rgba(14,75,49,0.3)] hover:-translate-y-1 text-center"
          >
            Kunjungi Kami Hari Ini
          </RouterLink>
          <RouterLink
            to="/menu"
            class="w-full sm:w-auto glass-panel text-primary border border-primary/20 font-label-md text-label-md px-8 py-4 rounded-full hover:bg-white/80 transition-all text-center"
          >
            Lihat Menu
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Features Bento Grid -->
    <section class="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="font-headline-md text-headline-md text-primary mb-4">Pengalaman Babe</h2>
        <p class="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
          Lebih dari sekadar kopi, kami merancang ruang yang menstimulasi panca indera Anda.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div
          class="bg-surface-container-lowest rounded-[24px] p-8 shadow-[0_8px_32px_0_rgba(14,75,49,0.06)] hover:shadow-[0_16px_48px_0_rgba(14,75,49,0.12)] transition-shadow duration-300 relative overflow-hidden group"
        >
          <div
            class="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform"
          >
            <span class="material-symbols-outlined filled text-3xl">eco</span>
          </div>
          <h3 class="font-headline-sm text-headline-sm text-primary mb-3">Botanical Vibes</h3>
          <p class="font-body-md text-body-md text-on-surface-variant relative z-10">
            Desain interior yang dipenuhi tanaman hijau hidup, menghadirkan kesegaran alam di
            tengah hiruk pikuk kota.
          </p>
          <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div
          class="bg-primary text-on-primary rounded-[24px] p-8 shadow-[0_8px_32px_0_rgba(14,75,49,0.15)] relative overflow-hidden md:-mt-6 md:mb-6"
        >
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"
          />
          <div
            class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 text-white relative z-10"
          >
            <span class="material-symbols-outlined filled text-3xl">coffee_maker</span>
          </div>
          <h3 class="font-headline-sm text-headline-sm mb-3 relative z-10">Premium Beans</h3>
          <p class="font-body-md text-body-md text-on-primary/90 relative z-10">
            Biji kopi pilihan yang di-roast dengan presisi tinggi, menghasilkan profil rasa yang
            kompleks dan memuaskan.
          </p>
        </div>

        <div
          class="bg-surface-container-lowest rounded-[24px] p-8 shadow-[0_8px_32px_0_rgba(14,75,49,0.06)] hover:shadow-[0_16px_48px_0_rgba(14,75,49,0.12)] transition-shadow duration-300 relative overflow-hidden group"
        >
          <div
            class="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform"
          >
            <span class="material-symbols-outlined filled text-3xl">wifi</span>
          </div>
          <h3 class="font-headline-sm text-headline-sm text-primary mb-3">Fast WiFi</h3>
          <p class="font-body-md text-body-md text-on-surface-variant relative z-10">
            Koneksi internet super cepat yang andal, mendukung produktivitas kerja remote atau
            pertemuan bisnis Anda.
          </p>
          <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>

    <!-- Our Story / Image Section -->
    <section class="py-xl bg-surface-container-low">
      <div class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            class="order-2 lg:order-1 relative rounded-[32px] overflow-hidden shadow-[0_24px_64px_-12px_rgba(14,75,49,0.15)] h-[400px] md:h-[500px]"
          >
            <img
              :src="images.senopati"
              alt="Senopati Area"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div class="absolute bottom-6 left-6 right-6">
              <span
                class="inline-block px-3 py-1 mb-2 rounded-full bg-white/20 backdrop-blur-md text-white font-label-sm text-label-sm border border-white/30"
              >
                Lokasi Kami
              </span>
              <p class="text-white font-headline-sm text-headline-sm">Jantung Kota Senopati</p>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <h2 class="font-headline-md text-headline-md text-primary mb-6">
              Cerita Kami di Sudut Kota
            </h2>
            <p class="font-body-md text-body-md text-on-surface-variant mb-6">
              Terlahir dari kerinduan akan ruang yang tenang di tengah ritme cepat Senopati. Babe
              dirancang sebagai sanctuary—sebuah oase di mana arsitektur modern berpadu harmonis
              dengan elemen organik.
            </p>
            <p class="font-body-md text-body-md text-on-surface-variant mb-8">
              Setiap sudut dirancang dengan cermat untuk memberikan kenyamanan maksimal, ditemani
              aroma kopi segar yang diseduh dari biji-biji terbaik Nusantara.
            </p>
            <RouterLink
              to="/tentang"
              class="inline-flex items-center text-primary font-label-md text-label-md hover:text-secondary transition-colors group"
            >
              Pelajari lebih lanjut
              <span
                class="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform"
              >
                arrow_forward
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
