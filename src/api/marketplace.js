import axios from "axios";

const marketplaceApi = axios.create({
  baseURL: "https://quiet-headland-40926.herokuapp.com/api"
});

export default marketplaceApi;
