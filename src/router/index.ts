import Vue from "vue";
import VueRouter, { RouterOptions } from "vue-router";
import Home from "@/pages/Home.vue";
import Profile from "@/pages/Profile.vue";
import Skill from "@/pages/Skill.vue";
import Work from "@/pages/Work.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/skill",
    component: Skill
  },
  {
    path: "/work",
    component: Work
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
} as RouterOptions);

export default router;
