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
      path: "/nevadonk",
      name: "nevadonk",
      component: () => import("../views/Nevadonk.vue"),
    },
    {
      path: "/dij",
      name: "dij",
      component: () => import("../views/Dij.vue"),
    },
    {
      path: "/alapitvany",
      name: "alapitvany",
      component: () => import("../views/Alapitvany.vue"),
    },
    {
      path: "/adatok",
      name: "adatok",
      component: () => import("../views/Adatok.vue"),
    },
    {
      path: "/kozzeteteli",
      name: "kozzeteteli",
      component: () => import("../views/Kozzeteteli.vue"),
    },
    {
      path: "/tantervek",
      name: "tantervek",
      component: () => import("../views/Tantervek.vue"),
    },
  ],
});

export default router;
