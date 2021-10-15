// export const myAction = async ({ commit }) => {};

// import axios from "axios";
import marketplaceApi from "../../../../api/marketplace";

export const loadProducts = async ({ commit }) => {
  const { data } = await marketplaceApi.get("/product/list");

  if (!data) {
    commit("setProducts", []);
    return;
  }

  const products = [];
  for (let _id of Object.keys(data)) {
    products.push({
      _id,
      ...data[_id]
    });
  }

  commit("setProducts", products);
};
