<template>
  <cart-products-list :cart="cart"></cart-products-list>
</template>

<script>
import CartProductsList from './CartProductsList';
import { mapState } from 'vuex';

export default {
  components: {
    CartProductsList
  },
  computed: {
    ...mapState('cart', {
      cart: 'datas'
    }),
  },
}
</script>

<style>

</style>
