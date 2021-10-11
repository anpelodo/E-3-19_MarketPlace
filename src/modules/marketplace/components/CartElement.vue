<template>
  <div class="home_cart">
    <div class="nombrep">
      <div class="cart-image">
        <img :src="img" :alt="nombre" />
      </div>

      <div class="cart-text">
        <p class="cart-title">{{ nombre }}</p>
        <p class="cart-price">${{ precio }}</p>
      </div>
    </div>

    <div class="quantity-selection">
      <input type="number" min="1" v-model="cantidades" :max="stock" />
      <p class="cart-price">$ {{ subTotal }}</p>
    </div>

    <div @click="deleteProductCart(_id)" class="pointer">
      <i class="fas fa-trash"></i>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    subTotal() {
      return this.precio * this.cantidades;
    },
  },

  data() {
    return {
      cantidades: this.cantidad,
    };
  },

  methods: {
    ...mapMutations("marketplace", ["deleteProductCart"]),
  },

  props: {
    nombre: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    cantidad: {
      type: Number,
      required: true,
    },
    _id: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
};
</script>


<style lang="scss" scoped>
.home_cart {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 4rem;
  min-width: 40rem;
  max-height: 25vh;
  padding: 1rem;
  align-items: center;
}

.nombrep {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cart-title,
.cart-price {
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 400;
  margin: 0;
}

.quantity-selection {
  display: flex;
  align-items: center;
  gap: 1rem;
}

input[type="number"] {
  height: 2.3rem;
  width: 20%;
  border: 1px solid var(--orange);
}

.fa-trash {
  color: var(--orange);
  font-size: 1.8rem;
  &:hover {
    color: var(--hover);
    transition: 0.3s;
  }
}

img {
  height: 10rem;
  width: 18rem;
  object-fit: contain;
}
</style>