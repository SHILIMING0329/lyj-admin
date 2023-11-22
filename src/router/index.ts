import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../view/index/index.vue"),
  },
];
const router = createRouter({
  // import.meta.env.BASE_URL
  history: createWebHashHistory(),
  routes,
});
export default router;
