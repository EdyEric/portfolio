import Vue from "vue";
import VueRouter, { RouterOptions } from "vue-router";
import Home from "@/pages/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
} as RouterOptions);

export default router;
