<template>
  <NavBar />
  <div class="d-flex">
    <div class="col-3">
      <SideBar />
    </div>
    <div class="col">
      <CardsView />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    NavBar: defineAsyncComponent(() => import("../components/NavBar.vue")),
    SideBar: defineAsyncComponent(() => import("../components/SideBar.vue")),
    CardsView: defineAsyncComponent(() => import("../views/CardsView.vue")),
  },
};
</script>

<style>
</style>