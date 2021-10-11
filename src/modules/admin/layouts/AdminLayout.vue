<template>
  <nav-bar />
  <br />
  <Admin />
</template>

<script>
import Admin from "../components/Admin.vue";
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    Admin,

    NavBar,
  },
};
</script>