export default {
  name: "/login",
  component: () =>
    import(/* webpackChunkName: "login" */ "../layouts/LoginLayout.vue"),
  children: [
    {
      path: "",
      name: "login-form",
      component: () =>
        import(/* webpackChunkName: "login-form" */ "../views/LoginView.vue")
    }
  ]
};
