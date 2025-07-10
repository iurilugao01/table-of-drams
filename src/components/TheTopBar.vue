<script setup lang="ts">
import { RouterLink } from "vue-router";
import TheThemeToggle from "./TheThemeToggle.vue";

const props = defineProps<{
  header: string;
}>();
</script>

<template>
  <header
    class="w-full bg-gray-100 dark:bg-black shadow-lg z-50 transition-colors duration-300 relative"
  >
    <div
      class="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center animate-fade-in-down"
    >
      <div class="flex items-center gap-6">
        <RouterLink
          to="/"
          class="text-4xl font-mono tracking-wider text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300"
        >
          {{ props.header }}
        </RouterLink>
      </div>

      <div class="flex items-center gap-4">
        <TheThemeToggle />
      </div>
    </div>

    <div
      class="h-1 w-full sticky bg-gradient-to-r from-red-900 via-red-700 to-red-500 dark:from-red-800 dark:via-red-600 dark:to-red-400 animate-gradient-x"
    ></div>
  </header>
</template>

<style scoped>
@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradient-x {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.6s ease-out forwards;
}

.animate-gradient-x {
  background-size: 200% 100%;
  animation: gradient-x 4s ease infinite;
}
</style>
