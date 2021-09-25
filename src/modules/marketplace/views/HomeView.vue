import { defineAsyncComponent } from 'vue';
<template>
  <h3>Home view</h3>
  <Card />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  components: {
    Card: defineAsyncComponent(() => import("../components/Card.vue")),
  },
};
</script>

<style>
</style>