import { defineAsyncComponent } from 'vue';
<template>
  <div class="home-container">
    <div class="card-container">
      <template v-for="card in cards" :key="card">
        <Card />
      </template>
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
      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  min-height: 53vh;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  justify-content: center;
  margin-top: 2rem;
}
</style>