<template>
  <div class="home-container">
    <div class="card-container">
      <template
        v-for="{ nombre, precio, descripcion, _id, img } = product in products"
        :key="_id"
      >
        <Card
          :nombre="nombre"
          :precio="precio"
          :descripcion="descripcion"
          :_id="_id"
          :img="img"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Card: defineAsyncComponent(() => import("../components/Card.vue")),
  },

  computed: {
    ...mapState("marketplace", ["products"]),
  },

  methods: {
    ...mapActions("marketplace", ["loadProducts"]),
  },

  created() {
    this.loadProducts();
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