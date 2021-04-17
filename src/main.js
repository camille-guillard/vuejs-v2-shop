import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import store from './store/store';


axios.defaults.baseURL = 'https://vue-shop-ab15a-default-rtdb.firebaseio.com/';

createApp(App).use(router).use(store).mount('#app')
