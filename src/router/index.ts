import type { Router } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/character/create",
    component: () => import("../views/CreateCharacterView.vue"),
  },
  {
    Path: "/character/:id",
    component: () => import("../views/CharacterView.vue"),
    props: true,
  },
];

declare const router: Router;
export default createRouter({
  history: createWebHistory(),
  routes,
});
