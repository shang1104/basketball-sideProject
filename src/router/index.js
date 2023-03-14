import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/front/HomeView.vue"),
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("../views/front/HomeView.vue"),
        },
        {
          path: "about",
          name: "about",
          component: () => import("../views/front/AboutView.vue"),
        },
        {
          path: "promble",
          name: "promble",
          component: () => import("../views/front/PrombleView.vue"),
        },
        {
          path: "apply",
          name: "apply",
          component: () => import("../views/front/ApplyView.vue"),
        },
        {
          path: "product",
          name: "product",
          component: () => import("../views/front/ProductView.vue"),
        },
        {
          path: "login",
          name: "login",
          component: () => import("../views/front/LoginView.vue"),
        },
      ],
    },
  ],
});

export default router;
