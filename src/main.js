import Vue from 'vue'
import App from './App.vue'
import * as Filters from './utils/filters'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://vue-shop-ab15a-default-rtdb.firebaseio.com/';
Vue.prototype.$http = axios;

Object.keys(Filters).forEach( (f) => {
  Vue.filter(f, Filters[f]);
})

export const eventBus = new Vue({
  data: {
    products: [],
    cart: []
  },
  methods: {
    addProductToCart(product) {
      if (!this.cart.map( i => i.id).includes(product.id)) {
        this.cart = [...this.cart, product];
        this.$emit('update:cart', this.cart.slice());
      }
    },
    removeProductFromCart(product) {
      this.cart = this.cart.slice().filter(p => p.id != product.id);
      this.$emit('update:cart', this.cart.slice());
    },
    addProduct(product) {
      product = { ...product, id: this.products.length + 1 };
      this.$http.post('products.json', product).then(() => {
        this.products = [ ...this.products, product];
        this.$emit('update:products', this.products);
      });
    },
    initProducts() {
      this.$http.get('products.json').then(res => {
        const data = res.data;
        this.products = Object.keys(data).map( key => data[key]);
        this.$emit('update:products', this.products);
      })
    }
  },
  created() {
    this.initProducts();
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
