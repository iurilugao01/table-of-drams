<script setup lang="ts">
import { onMounted, ref } from "vue";

const darkTheme = ref(false);

const toggleTheme = () => {
  if (darkTheme.value) {
    localStorage.removeItem("data-theme");
    document.documentElement.removeAttribute("data-theme");
    darkTheme.value = false;
  } else {
    localStorage.setItem("data-theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    darkTheme.value = true;
  }
};

onMounted(() => {
  darkTheme.value = !!localStorage.getItem("data-theme");
  if (darkTheme.value)
    document.documentElement.setAttribute("data-theme", "dark");
});
</script>

<template>
  <div class="w-12 h-12 flex items-center justify-center" @click="toggleTheme">
    <i
      :class="[
        'transition-transform duration-700 ease-in-out w-8 h-8 text-2xl text-black dark:text-white hover:scale-120',
        darkTheme ? 'bi-cloud-sun-fill' : 'bi-brightness-high-fill',
      ]"
    >
    </i>
  </div>
</template>
