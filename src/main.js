import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from "./store"; // store 등록!
import globalver from "./globalver"; //global 변수 추가
import axios from "axios";

const app = createApp(App) 
app.config.globalProperties.$axios = axios; 

app.use(router, store, globalver).mount('#app')
