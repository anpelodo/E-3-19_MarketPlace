import { defineAsyncComponent } from 'vue';
<template>
  <div class="card-container pt-3">
    <div class="container">
      <div class="row">
        <div class="col-4" v-for="num in arr" :key="num">
          <Card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Card: defineAsyncComponent(() => import("../components/Card.vue")),
  },

  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
};
</script>

<style scoped>
.card-container {
  background: #303030;
  height: calc(100vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>