// export const myGetter =  (state) => {
//   return state
// };

export const getProductById = state => (id = "") => {
  const product = state.products.find(product => product.id === id);
  return product ? { ...product } : undefined;
};
