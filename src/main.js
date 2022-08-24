import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// Axios 使用
import axios from "axios";
import VueAxios from "vue-axios";

// 不允许发送Cookie
axios.defaults.withCredentials = false;

createApp(App).use(VueAxios, axios).mount('#app')
