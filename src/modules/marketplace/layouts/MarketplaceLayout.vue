<template>
  <NavBar />
  <router-view></router-view>
  <Footbar />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    NavBar: defineAsyncComponent(() => import("../components/NavBar.vue")),
    Footbar: defineAsyncComponent(() => import("../components/Footbar.vue")),
  },
};
</script>

<style>
</style>