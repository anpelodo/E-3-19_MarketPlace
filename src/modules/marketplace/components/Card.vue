<template>
  <div class="home_card pointer">
    <div class="card-image">
      <!-- src="https://siliconnews.plataformasinc.es/wp-content/uploads/2019/08/7-tarjetas-de-v%C3%ADdeo-para-tu-PC-gamer-que-debes-tener.jpg" -->
      <img src="../../../assets/ram.jpg" alt="card-image" />
    </div>
    <div class="card-text">
      <p class="card-title">Nombre del producto Nombre del producto</p>
      <div class="card-price">
        <p>$ 192.000</p>
        <button>Agregar al carrito</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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