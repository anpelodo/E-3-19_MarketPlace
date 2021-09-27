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
      path: "product/:id",
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
    },
    {
      path: "cart",
      name: "cart",
      component: () =>
        import(
          "@/modules/marketplace/views/CartView.vue"
        )
    }
  ]
};
