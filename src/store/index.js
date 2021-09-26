import { createStore } from "vuex";
import marketplace from "../modules/marketplace/store/marketplace";

const store = createStore({
  modules: {
    marketplace
  }
});

export default store;
