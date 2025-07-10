<script setup lang="ts">
import { ref, watch } from "vue";
import type { Form } from "../types/interfaces";
import { useRouter } from "vue-router";
import type { Router } from "vue-router";

const router = useRouter() as Router;

const formData = ref<Form>({
  name: "",
  system: "",
  extras: [{ key: "", content: "" }],
});

const finishForm = () => {
  router.push({
    path: "/character/1",
  });
};

watch(
  () => formData.value.extras[formData.value.extras.length - 1].content,
  (newValue) => {
    if (newValue?.length > 0)
      formData.value.extras.push({ key: "", content: "" });
  },
  { immediate: true, flush: "post" }
);
</script>

<template>
  <div class="create-character">
    <span class="text-gray-950 dark:text-gray-50 text-2xl font-bold">
      Criar Ficha
    </span>

    <form class="flex flex-col gap-4 mt-4 text-gray-950 dark:text-gray-50">
      <div>
        <label for="name" class="mr-2">Nome</label>
        <input
          type="text"
          id="name"
          class="p-1 outline-none border-b-2 border-b-[#0d0d0d] dark:border-b-gray-50"
          v-model="formData.name"
        />
      </div>
      <div>
        <label for="system" class="mr-2">Sistema</label>
        <input
          type="text"
          id="system"
          class="p-1 outline-none border-b-2 border-b-[#0d0d0d] dark:border-b-gray-50"
          v-model="formData.system"
        />
      </div>
      <div>
        <div>
          <span>Informações Extras</span>
        </div>
        <div v-for="(extra, index) in formData.extras" :key="index">
          <input
            type="text"
            v-model="extra.key"
            class="p-1 outline-none border-b-2 border-b-[#0d0d0d] dark:border-b-gray-50 mr-3"
            placeholder="Insira um titulo"
          />
          <input
            type="text"
            v-show="extra.key"
            v-model="extra.content"
            class="p-1 outline-none border-b-2 border-b-[#0d0d0d] dark:border-b-gray-50"
            placeholder="Insira um conteúdo"
          />
        </div>
      </div>
      <div>
        <button
          @click="finishForm"
          class="border-s bg-green-500 dark:bg-green-800 text-gray-950 dark:text-gray-50 font-bold rounded-2xl flex items-center p-3 gap-2"
        >
          Finalizar
        </button>
      </div>
    </form>
  </div>
</template>
