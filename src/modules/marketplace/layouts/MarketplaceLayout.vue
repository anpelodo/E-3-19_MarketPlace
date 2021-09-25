<template>
  <NavBar />
  <HomeView />
  <Footbar />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    NavBar: defineAsyncComponent(() => import("../components/NavBar.vue")),
    Footbar: defineAsyncComponent(() => import("../components/Footbar.vue")),
    HomeView: defineAsyncComponent(() => import("../views/HomeView.vue")),
  },
};
</script>

<style>
</style>