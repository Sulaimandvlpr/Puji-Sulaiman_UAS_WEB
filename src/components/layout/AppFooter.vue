<script setup>
defineProps({
  variant: {
    type: String,
    default: 'compact',
    validator: (value) => ['full', 'compact', 'about', 'gallery'].includes(value),
  },
})
</script>

<template>
  <!-- Footer Beranda -->
  <footer
    v-if="variant === 'full'"
    class="bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant/30 w-full rounded-t-[40px] mt-xl"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-4 gap-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl"
    >
      <div class="md:col-span-2">
        <div class="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim mb-4">
          Babe
        </div>
        <p
          class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container max-w-sm mb-6"
        >
          Senopati's Finest Botanical Sanctuary. Menyajikan pengalaman kopi premium dalam balutan
          arsitektur hijau yang menenangkan.
        </p>
      </div>
      <div>
        <h4 class="font-label-md text-label-md text-primary dark:text-primary-fixed-dim font-bold mb-4">
          Explore
        </h4>
        <ul class="space-y-3">
          <li>
            <RouterLink
              to="/menu"
              class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
            >
              Menu
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/tentang"
              class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
            >
              About Us
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/galeri"
              class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
            >
              Gallery
            </RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="font-label-md text-label-md text-primary dark:text-primary-fixed-dim font-bold mb-4">
          Connect
        </h4>
        <ul class="space-y-3">
          <li>
            <a
              href="#"
              class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
            >
              Instagram
            </a>
          </li>
          <li>
            <RouterLink
              to="/tentang"
              class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
            >
              Location
            </RouterLink>
          </li>
          <li>
            <a
              href="#"
              class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
            >
              Opening Hours
            </a>
          </li>
          <li>
            <a
              href="#"
              class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-outline-variant/20 py-6 text-center">
      <p class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-tertiary-container opacity-80">
        &copy; 2024 Babe Jakarta. Blok M's Finest Botanical Sanctuary.
      </p>
    </div>
  </footer>

  <!-- Footer Menu -->
  <footer
    v-else-if="variant === 'compact'"
    class="bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant/30 w-full rounded-t-[40px] mt-xl"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-4 gap-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl"
    >
      <div class="col-span-1 md:col-span-1">
        <div class="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim mb-md">
          Babe
        </div>
        <p class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-tertiary-container mb-md">
          &copy; 2024 Babe Jakarta. blok m's Finest Botanical Sanctuary.
        </p>
      </div>
      <div class="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-md">
        <div class="flex flex-col gap-sm">
          <a
            href="#"
            class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container opacity-80 hover:opacity-100 hover:text-secondary dark:hover:text-secondary-fixed transition-opacity transition-colors"
          >
            Instagram
          </a>
        </div>
        <div class="flex flex-col gap-sm">
          <RouterLink
            to="/tentang"
            class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container opacity-80 hover:opacity-100 hover:text-secondary dark:hover:text-secondary-fixed transition-opacity transition-colors"
          >
            Location
          </RouterLink>
        </div>
        <div class="flex flex-col gap-sm">
          <a
            href="#"
            class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container opacity-80 hover:opacity-100 hover:text-secondary dark:hover:text-secondary-fixed transition-opacity transition-colors"
          >
            Opening Hours
          </a>
        </div>
        <div class="flex flex-col gap-sm">
          <a
            href="#"
            class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container opacity-80 hover:opacity-100 hover:text-secondary dark:hover:text-secondary-fixed transition-opacity transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Footer About -->
  <footer
    v-else-if="variant === 'about'"
    class="w-full rounded-t-[40px] bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant/30 mt-auto"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-4 gap-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl"
    >
      <div class="col-span-1 md:col-span-2">
        <h2 class="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim mb-sm">
          Babe
        </h2>
        <p
          class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container max-w-sm mb-md"
        >
          &copy; 2024 Babe Jakarta. Senopati's Finest Botanical Sanctuary.
        </p>
      </div>
      <div class="col-span-1">
        <h3 class="font-label-md text-label-md font-bold text-primary mb-sm uppercase tracking-wider">
          Tautan Cepat
        </h3>
        <ul class="space-y-sm">
          <li>
            <a
              href="#"
              class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
            >
              Instagram
            </a>
          </li>
          <li>
            <RouterLink
              to="/tentang"
              class="font-body-md text-body-md text-primary font-bold transition-colors opacity-80 hover:opacity-100"
            >
              Location
            </RouterLink>
          </li>
          <li>
            <a
              href="#"
              class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
            >
              Opening Hours
            </a>
          </li>
          <li>
            <a
              href="#"
              class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>

  <!-- Footer Galeri -->
  <footer
    v-else
    class="w-full rounded-t-[40px] bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant/30 mt-xl"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-4 gap-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl"
    >
      <div class="col-span-1 md:col-span-2 flex flex-col gap-sm">
        <span class="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim">
          Babe
        </span>
        <p class="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container mt-4">
          &copy; 2024 Babe Jakarta. Senopati's Finest Botanical Sanctuary.
        </p>
      </div>
      <div class="col-span-1 flex flex-col gap-sm">
        <a
          href="#"
          class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
        >
          Instagram
        </a>
        <RouterLink
          to="/tentang"
          class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
        >
          Location
        </RouterLink>
      </div>
      <div class="col-span-1 flex flex-col gap-sm">
        <a
          href="#"
          class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
        >
          Opening Hours
        </a>
        <a
          href="#"
          class="font-label-sm text-label-sm text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100"
        >
          Contact Us
        </a>
      </div>
    </div>
  </footer>
</template>
