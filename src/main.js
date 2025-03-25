import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";
import qs from "qs";
import {
  getCurDate,
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from "./common.js";

import router from '@/router/index.js'


axios.defaults.baseURL = `http://127.0.0.1:8081/elm/`;

const app = createApp(App)
app.use(router)

app.mount("#app");

app.config.globalProperties.$axios = axios;

app.config.globalProperties.$qs = qs;

app.config.globalProperties.productionTip = false;
app.config.globalProperties.$getCurDate = getCurDate;
app.config.globalProperties.$setSessionStorage = setSessionStorage;
app.config.globalProperties.$getSessionStorage = getSessionStorage;
app.config.globalProperties.$removeSessionStorage = removeSessionStorage;
app.config.globalProperties.$setLocalStorage = setLocalStorage;
app.config.globalProperties.$getLocalStorage = getLocalStorage;
app.config.globalProperties.$removeLocalStorage = removeLocalStorage;
