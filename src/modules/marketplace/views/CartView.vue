<template>
  <div class="container-carrito">
    <div class="carrito">
      <p class="titulo">Carrito de compra</p>
      <div class="lista">
        <div
          v-for="{ nombre, precio, img, cantidad, id } = item in carrito"
          :key="id"
        >
          <Prod
            :nombre="nombre"
            :precio="precio"
            :img="img"
            :cantidad="cantidad"
          />
        </div>
      </div>

      <div class="pago">
        <p>Total: $ 300.000</p>
        <button>Pagar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapState } from "vuex";

export default {
  components: {
    Prod: defineAsyncComponent(() => import("../components/CartElement.vue")),
  },
  data() {
    return {};
  },

  computed: {
    ...mapState("marketplace", ["carrito"]),
  },
};
</script>

<style lang="scss">
.container-carrito {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

.carrito {
  display: flex;
  flex-direction: column;
}

.titulo{
  font-size: 2.2rem;
  font-weight: bold;
  padding-left: 1.7rem;
  
}

.lista {
  max-height: 65vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.pago {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.6rem;
  align-items: center;
}

.pago p {
  font-weight: 400;
  text-align: right;
  width: 100%;
}

.pago button {
  background: var(--orange);
  border-radius: 0.4rem;
  border: 1px solid var(--orange);
  color: white;
  font-weight: 700;
  width: 100%;

  &:hover {
    background: var(--hover);
    color: var(--white);
    transition: 0.5s;
  }
}
</style>