<template>
  <div class="d-flex flex-row justify-content-between px-5">
    <span>{{ product.title }}</span>
    <span>{{ product.price }}€</span>
    <button @click="removeProductFromCart" class="close">
      <span>&times;</span>
    </button>
  </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
  props: ['product'],
  methods: {
    removeProductFromCart() {
      eventBus.removeProductFromCart({...this.product});
    }
  }

}
</script>

<style>
.product-container {
  height: 400px;
  padding: 15px;
}

p {
  font-size: 12px;
}
</style>
