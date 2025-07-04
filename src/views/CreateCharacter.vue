<script setup lang="ts">
import { ref, watch } from "vue";
import type { Form } from "../types/interfaces";

const formData = ref<Form>({
  name: "",
  system: "",
  extras: [],
});

const finishForm = () => {};

watch(
  () => formData.value.extras[formData.value.extras.length - 1],
  (newValue) => {
    if (newValue?.content) {
      formData.value.extras.push({ key: "", content: "" });
    }
  },
  { immediate: true, flush: "post" }
);
</script>

<template>
  <div class="create-character">
    <span>Criar Ficha</span>
    <form>
      <div>
        <label for="">Nome</label>
        <input type="text" v-model="formData.name" />
      </div>
      <div>
        <label for="">Sistema</label>
        <input type="text" v-model="formData.system" />
      </div>
      <div>
        <div>
          <span>Informações Extras</span>
        </div>
        <div v-for="extra in formData.extras" :key="extra.key">
          <input
            type="text"
            v-model="extra.key"
            placeholder="Insira um titulo"
          />
          <input
            type="text"
            v-if="extra.key"
            v-model="extra.content"
            placeholder="Insira um conteúdo"
          />
        </div>
      </div>
    </form>
  </div>
</template>
