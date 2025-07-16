<script setup lang="ts">
const props = defineProps<{
  sumToAll: number;
  expertises: {
    id: number;
    key: string;
    value1: number;
    value2?: number;
    atribute?: string;
  }[];
  reference: boolean;
}>();
</script>

<template>
  <div class="flex flex-col">
    <div>
      <span></span>
      <span v-if="reference">Atributo</span>
      <span>Pericia</span>
      <span>Bonus</span>
      <span>Outros</span>
    </div>
    <div v-for="expertise in expertises" :key="expertise.id">
      <button></button>
      <span>{{ expertise.key }}</span>
      <span v-if="expertise.atribute">{{ expertise.atribute }}</span>
      <span>{{ expertise.value1 ? expertise.value1 : 0 }}</span>
      <span>{{ expertise.value2 ? expertise.value2 : 0 }}</span>
    </div>
  </div>
</template>
