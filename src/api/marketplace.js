import axios from "axios";

const marketplaceApi = axios.create({
  baseURL: "http://localhost:3002/api"
});

export default marketplaceApi;
