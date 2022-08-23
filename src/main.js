import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// Axios 使用
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App).use(VueAxios, axios).mount('#app')
