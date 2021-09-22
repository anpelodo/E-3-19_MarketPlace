import { createRouter, createWebHashHistory } from "vue-router";
import homeRouter from "../modules/marketplace/router";

const routes = [
  {
    path: "/",
    name: "Index",
    // component: () =>
    //   import(/* webpackChunkName: "index" */ "../views/Index.vue")
    redirect: "/home"
  },
  {
    path: "/home",
    ...homeRouter
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
