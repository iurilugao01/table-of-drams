<script setup lang="ts">
import { ref } from "vue";
import type { Character } from "@/types/interfaces";

const characters: Character[] = [];
</script>

<template>
  <div>
    <button></button>
  </div>
  <div v-if="characters.length">
    <div v-for="characters in characters"></div>
  </div>
</template>
