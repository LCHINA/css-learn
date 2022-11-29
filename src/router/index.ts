import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/3-1",
      name: "3-1",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CSS-3-1.vue"),
    },
    {
      path: "/4-18",
      name: "4-18",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CSS-4-18.vue"),
    },
    {
      path: "/5-2",
      name: "5-2",
      component: () => import("../views/CSS-5-2.vue"),
    },
    {
      path: "/6-3",
      name: "6-3",
      component: () => import("../views/CSS-6-3.vue"),
    },
    {
      path: "/7-1",
      name: "6-1",
      component: () => import("../views/CSS-7-1.vue"),
    },
  ],
});

export default router;
