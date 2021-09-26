import { defineAsyncComponent } from 'vue';
<template>
  <div class="home-container">
    <div class="card-container">
      <template
        v-for="{ nombre, precio, descripcion, id, img } = product in products"
        :key="id"
      >
        <Card
          :nombre="nombre"
          :precio="precio"
          :descripcion="descripcion"
          :id="id"
          :img="img"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapState } from "vuex";

export default {
  components: {
    Card: defineAsyncComponent(() => import("../components/Card.vue")),
  },

  computed: {
    ...mapState("marketplace", ["products"]),
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