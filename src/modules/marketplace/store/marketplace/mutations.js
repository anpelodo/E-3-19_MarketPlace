// export const myAction = a (state) => {};

export const setProducts = (state, products) => {
  state.products = [...products];
};

export const addProductToCart = (state, product) => {
  state.carrito = [...state.carrito, product];
};
