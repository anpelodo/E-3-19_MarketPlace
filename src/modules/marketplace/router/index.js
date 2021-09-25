export default {
  name: "/",
  component: () =>
    import(/* webpackChunkName: "home" */ "../layouts/MarketplaceLayout.vue"),
  children: []
};
