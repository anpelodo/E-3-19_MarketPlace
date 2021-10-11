// export const myAction = a (state) => {};

export const setProducts = (state, products) => {
  state.products = [...products];
};

export const addProductToCart = (state, product) => {
  state.carrito = [...state.carrito, product];
};

export const deleteProductCart = (state, _id) => {
  const idx = state.carrito.indexOf(
    state.carrito.find(item => item._id === _id)
  );

  state.carrito.splice(idx, 1);
};
