<script setup lang="ts">
import type { Character } from "../types/interfaces";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import type { Router } from "vue-router";

const router = useRouter() as Router;

const getCharacters = async (): Promise<Character[]> => {
  return [{ id: 1, name: "Character One", system: "System A" }];
};

const characters = ref<Character[]>([]);

const createCharacter = () => {
  if (characters.value.length >= 10) return;
  router.push({
    path: "/character/create",
  });
};
const fetchCharacters = async () => {
  characters.value = await getCharacters();
};
onMounted(() => {
  fetchCharacters();
});
</script>

<template>
  <div
    class="flex flex-col items-center min-h-screen p-4 bg-gray-200 dark:bg-[#0d0d0d] transition-colors duration-300"
  >
    <div class="flex w-full">
      <button
        @click="createCharacter"
        class="flex-end border-s bg-red-500 dark:bg-red-800 text-gray-950 dark:text-gray-50 font-bold rounded-2xl flex items-center p-3 gap-2"
      >
        <span>Nova Ficha</span>
        <i class="bi bi-plus-circle"></i>
      </button>
    </div>
    <div v-if="characters.length">
      <div v-for="character in characters" class="flex gap-4 mt-4">
        <div
          class="bg-gray-100 dark:bg-[#0d0d0d] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          @click="router.push({ path: `/character/${character.id}` })"
        >
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            {{ character.name }}
          </h2>
          <p class="text-gray-700 dark:text-gray-300">
            Sistema: {{ character.system }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
