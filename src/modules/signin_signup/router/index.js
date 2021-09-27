export default {
  name: "/singing",
  component: () => import(/* webpackChunkName: "home" */ "../layouts/Sign.vue"),
  children: [
    {
      path: "",
      name: "selection",
      component: () =>
        import(
          /* webpackChunkName: "singup-selection" */ "../views/SignUpSelectionView.vue"
        )
    },
    {
      path: "email",
      name: "sign-form",
      component: () =>
        import(/* webpackChunkName: "singup-form" */ "../views/SignUpForm.vue")
    }
  ]
};
