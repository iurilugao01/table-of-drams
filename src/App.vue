<script setup lang="ts">
import TheTopBar from "./components/TheTopBar.vue";
</script>

<template>
  <div
    class="min-h-screen w-full bg-gray-200 dark:bg-[#0d0d0d] transition-colors duration-300"
  >
    <TheTopBar header="Table of Dreams" />

    <div class="flex justify-center mt-6">
      <div
        class="w-full max-w-5xl p-1 rounded-3xl shadow-2xl transition-all duration-300"
      >
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css");
</style>
