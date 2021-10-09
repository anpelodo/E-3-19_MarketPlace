import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/styles.scss";
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = 'http://localhost:3002/api';


createApp(App)
.use(store)
.use(router)
.use(VueAxios, axios)
.mount("#app");


