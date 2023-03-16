import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/FrontLayout.vue"),
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("../views/front/HomeView.vue"),
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
          path: "reserve",
          name: "reserve",
          component: () => import("../views/front/ReserveView.vue"),
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
