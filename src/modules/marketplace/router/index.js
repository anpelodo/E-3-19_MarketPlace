export default {
  name: "/",
  component: () =>
    import(/* webpackChunkName: "home" */ "../layouts/MarketplaceLayout.vue"),
  children: [
    {
      path: "",
      name: "home",
      component: () =>
        import(
          /* webpackChunkName: "marketplace-home-view" */ "@/modules/marketplace/views/HomeView.vue"
        )
    },
    {
      path: ":id",
      name: "product",
      component: () =>
        import(
          /* webpackChunkName: "marketplace-product-view" */ "@/modules/marketplace/views/ProductView.vue"
        ),
      props: route => {
        return {
          id: route.params.id
        };
      }
    }
  ]
};
