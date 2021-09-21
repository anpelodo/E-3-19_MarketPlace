<template>
  <NavBar />
  <div class="d-flex">
    <div class="col-3">
      <SideBar />
    </div>
    <div class="col">div</div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    NavBar: defineAsyncComponent(() => import("../components/NavBar.vue")),
    SideBar: defineAsyncComponent(() => import("../components/SideBar.vue")),
  },
};
</script>

<style>
</style>