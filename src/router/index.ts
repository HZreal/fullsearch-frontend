import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import IndexPage from "@/pages/IndexPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: IndexPage,
  },
  // {
  //   path: "/index",
  //   name: "index",
  //   component: IndexPage,
  // },

  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../pages/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
