<template>
  <div class="d-flex flex-column p-5">
    <h5 class="border-bottom pb-3">Mon panier</h5>

    <template v-if="cart.length">
      <div class="row">
        <span class="img-container"></span>
        <span class="title-container">Titre</span>
        <span class="price-container">Prix</span>
        <span class="quantity-container">Quantité</span>
        <span class="remove-product-container"></span>
      </div>
      <hr>
      <cart-product-item v-for="product in cart" :key="product.id" :product="product"></cart-product-item>
        <hr class="w-100">
        <span>Total: {{ price(total) }}</span>
    </template>
    <template v-else>
      <span class="empty-cart">Le panier est vide</span>
    </template>
    
  </div>
</template>

<script>
import CartProductItem from './CartProductItem';
import { mapGetters } from 'vuex';

export default {
  components: {
    CartProductItem
  },
  props: ['cart'],
  computed: {
    ...mapGetters('cart', ['total'])
  },
  methods: {
    price(value) {
      return `${ value }€`;
    },
    maxLength(value, length) {
      if (value.length > length) {
          return value.slice(0, length - 6) + ' (...)';
      } else {
          return value;
      }
    }
  }
}
</script>

<style scoped>

.row {
  width: 100%;
}

.img-container {
  width: 25%;
}

.title-container {
  width: 25%;
  text-align: center;
}

.price-container {
  width: 15%;
  text-align: center;
}

.quantity-container {
  width: 10%;
  text-align: center;
}

.remove-product-container {
  width: 25%;
}

.empty-cart {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

</style>
