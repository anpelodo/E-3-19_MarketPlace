import { createRouter, createWebHashHistory } from "vue-router";
import homeRouter from "../modules/marketplace/router";

const routes = [
  {
    path: "/",
    name: "index",
    // component: () =>
    //   import(/* webpackChunkName: "index" */ "../views/Index.vue")
    redirect: "/marketplace"
  },
  {
    path: "/marketplace",
    ...homeRouter
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
