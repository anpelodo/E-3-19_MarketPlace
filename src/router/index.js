import { createRouter, createWebHashHistory } from "vue-router";
import homeRouter from "../modules/marketplace/router";
import sign from "../modules/signin_signup/router";

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
  },
  {
    path: "/s",
    ...sign
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
