<template>
  <Navbar />
  <router-view></router-view>
  <Footbar />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../components/NavBar.vue")),
    Footbar: defineAsyncComponent(() => import("../components/Footbar.vue")),
  },
};
</script>

<style>
</style>