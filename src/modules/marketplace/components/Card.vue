<template>
  <div class="home_card pointer">
    <div
      @click="$router.push({ name: 'product', params: { _id } })"
      class="card-image"
    >
      <!-- src="https://siliconnews.plataformasinc.es/wp-content/uploads/2019/08/7-tarjetas-de-v%C3%ADdeo-para-tu-PC-gamer-que-debes-tener.jpg" -->
      <img :src="img" :alt="nombre" />
    </div>
    <div class="card-text">
      <p class="card-title">{{ nombre }}</p>
      <div class="card-price">
        <p>$ {{ precio }}</p>
        <button @click.prevent="addToCart(_id)">Agregar al carrito</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    nombre: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    _id: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapGetters("marketplace", ["getProductById", "existElementInCart"]),
  },

  methods: {
    ...mapMutations("marketplace", ["addProductToCart"]),
    addToCart(_id) {
      if (this.existElementInCart(_id) === true) return;

      const product = { ...this.getProductById(_id), cantidad: 1 };
      this.addProductToCart(product);
    },
  },
};
</script>

<style lang="scss" scoped>
.home_card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  min-height: 23rem;
  padding: 1rem;
  width: 20rem;
}

img {
  height: 16rem;
  object-fit: contain;
  width: 18rem;
}

.card-text {
  height: 10rem;
}

.card-title,
.card-price {
  font-size: 1.6rem;
  height: 5rem;
}

.card-price button {
  background: var(--white);
  border-radius: 0.4rem;
  border: 1px solid var(--orange);
  color: var(--orange);
  width: 100%;

  &:hover {
    background: var(--orange);
    color: var(--white);
    transition: 0.5s;
  }
}

.card-price p {
  color: var(--orange);
  margin: 0;
}
</style>