export default {
  name: "/",
  component: () =>
    import(/* webpackChunkName: "home" */ "../layouts/HomeLayout.vue"),
  children: []
};
