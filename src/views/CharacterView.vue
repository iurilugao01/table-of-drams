<script setup lang="ts">
import type { CharacterData } from "../types/interfaces";
import { onMounted, ref } from "vue";

const props = defineProps<{
  id: string;
}>();

const getCharacters = async (): Promise<CharacterData> => {
  return {
    id: parseInt(props.id, 10),
    name: "Character One",
    system: "System A",
    imageUrl: "https://example.com/image.jpg",
    extras: [{ key: "extra1", content: "Extra Content 1" }],
    createdAt: new Date().toISOString(),
    layouts: [],
  };
};

const character = ref<CharacterData | null>(null);

const fetchCharacters = async () => {
  character.value = await getCharacters();
};

onMounted(() => {
  fetchCharacters();
});
</script>

<template></template>
