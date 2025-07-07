<script setup lang="ts">
import TheThemeToggle from "./components/TheThemeToggle.vue";
</script>

<template>
  <div
    class="min-h-screen w-full bg-gray-200 dark:bg-[#0d0d0d] transition-colors duration-300"
  >
    <div class="p-6 flex justify-end fixed top-0 right-0">
      <TheThemeToggle />
    </div>

    <div class="flex justify-center">
      <div
        class="w-full max-w-5xl p-10 rounded-3xl shadow-2xl transition-all duration-300"
      >
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css");
</style>
