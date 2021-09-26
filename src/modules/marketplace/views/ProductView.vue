<template>
  <div class="product-view">
    <div class="shown-product">
      <div class="image">
        <img src="../../../assets/ram.jpg" alt="image" />
      </div>
      <div class="info">
        <div class="text">
          <p class="title">Nombre del producto</p>
          <p class="price">$ 192.000</p>
          <p class="stock">Stock disponible <small>(100 disponible)</small></p>
        </div>
        <div class="actions">
          <div class="quantity-selection">
            <input type="number" min="1" value="1" />
          </div>
          <button>Añadir al carrito</button>
        </div>
      </div>
    </div>
    <div class="description">
      <h3>Descripcion</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugit.
        Asperiores, minima nostrum. Pariatur a architecto quod asperiores quae
        nulla, id dolores, accusamus non voluptatem quibusdam sapiente rerum
        suscipit nostrum. Itaque aut optio distinctio voluptatem nesciunt qui
        alias, ab ratione. Aut eum, quas sit vitae similique suscipit a magni
        autem sint debitis voluptates quasi, libero officia quidem laudantium
        obcaecati natus! Distinctio maiores placeat, aperiam optio est eveniet
        adipisci doloremque earum dolorum saepe nulla nisi corporis officiis
        modi possimus, ullam enim harum veritatis eum quo accusantium?
        Voluptates pariatur eius aut dolorum? Illo perferendis unde tenetur
        eveniet officia natus corporis hic aliquam, doloribus delectus
        reiciendis, debitis nihil? Excepturi quia ut optio totam explicabo est
        similique necessitatibus omnis! Illum commodi quas autem velit.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.product-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
}

.shown-product {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
}

.info {
  display: flex;
  flex-direction: column;
  height: 100%;
}

img {
  width: 26rem;
  height: 20rem;
  object-fit: contain;
}

.description {
  padding: 3rem 10rem;

  @media screen and (max-width: 680px) {
    padding: 3rem;
  }
}

.text {
  height: 50%;

  .title,
  .price {
    font-size: 2.5rem;
  }

  .price {
    color: var(--orange);
  }

  .stock {
    padding-top: 4.6rem;
  }

  small {
    color: #999;
  }
}

.actions {
  display: flex;
  gap: 1rem;

  .quantity-selection {
    width: 20%;
  }

  input[type="number"] {
    width: 100%;
    border: 1px solid var(--orange);
  }

  button {
    width: 80%;
    background: var(--orange);
    border: var(--orange);
    color: var(--white);
    font-size: 1.5rem;

    &:hover {
      background: var(--hover);
      transition: 0.3s;
    }
  }

  input,
  button {
    height: 3rem;
  }
}
</style>