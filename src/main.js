import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

export const eventBus = new Vue({
  data: {
    products: [
      {
        id: 1,
        title: 'Macbook',
        img: 'data:image/jpeg;base64,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',
        description: `D'une finesse et d'une légèreté hors du commun, le MacBook Pro est encore plus rapide et plus puissant qu'avant.`,
        price: 1500
      },
      {
        id: 2,
        title: 'Macbook',
        img: 'data:image/jpeg;base64,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',
        description: `D'une finesse et d'une légèreté hors du commun, le MacBook Pro est encore plus rapide et plus puissant qu'avant.`,
        price: 1500
      }
    ],
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
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
