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
          component: () => import("../views/front/PrombleView.vue"),
        },
        {
          path: "cart",
          component: () => import("../views/front/CartView.vue"),
        },
        {
          path: "order",
          component: () => import("../views/front/OrderView.vue"),
        },
        {
          path: "order/:id",
          component: () => import("../views/front/OrderView.vue"),
        },
        {
          path: "pay/:id",
          component: () => import("../views/front/PayView.vue"),
        },
        {
          path: "reserve",
          component: () => import("../views/front/ReserveView.vue"),
        },
        {
          path: "products",
          component: () => import("../views/front/ProductsView.vue"),
        },
        {
          path: "product/:id",
          component: () => import("../views/front/ProductView.vue"),
        },
        {
          path: "login",
          component: () => import("../views/front/LoginView.vue"),
        },
      ],
    },
  ],
});

export default router;
