<script setup lang="ts">
import { ref } from "vue";
import type { Character } from "../types/interfaces";
import { useRouter } from "vue-router";
import type { Router } from "vue-router";

const router = useRouter() as Router;
const characters: Character[] = [];

const createCharacter = () => {
  if (characters.length >= 10) return;
  router.push({
    path: "/character/create",
  });
};
</script>

<template>
  <div>
    <div v-if="characters.length">
      <div v-for="characters in characters"></div>
    </div>
    <button
      @click="createCharacter"
      class="border-s bg-red-500 dark:bg-red-800 text-gray-950 dark:text-gray-50 rounded-2xl flex items-center p-3 gap-2"
    >
      <span>Nova Ficha</span>
      <i class="bi bi-plus-circle"></i>
    </button>
  </div>
</template>
