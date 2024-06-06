import { createRouter, createWebHistory } from "vue-router";

//Home
import Home from "../views/Home.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/fotografia",
      name: "fotografia",
      component: ()=>import('../views/Photography.vue'),
    },
    {
      path: "/editorial",
      name: "editorial",
      component: ()=>import('../views/Editorial.vue'),
    },
    {
      path: "/identidad-de-marca",
      name: "identidad-de-marca",
      component: ()=>import('../views/Branding.vue'),
    },
    {
      path: "/about-me",
      name: "about-me",
      component: ()=>import('../views/AboutMe.vue'),
    }
  ],
});

export default router;