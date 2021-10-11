// export const myGetter =  (state) => {
//   return state
// };

export const getProductById = state => (_id = "") => {
  const product = state.products.find(product => product._id === _id);
  return product ? { ...product } : undefined;
};

export const existElementInCart = state => (_id = "") => {
  const product = state.carrito.find(item => item._id === _id);
  return product ? true : false;
};

export const getTotalCarrito = state => state.total;
