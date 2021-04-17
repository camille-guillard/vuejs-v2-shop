<template>
  <div class="cart-row d-flex flex-row justify-content-between px-5">
    <div class="img-container">
      <img class="product-img" :src="product.img" :alt="product.title" />
    </div>
    <div class="title-container">
      <span>{{ product.title }}</span>
    </div>
    <div class="price-container">
      <span>{{ product.price | price }}</span>
    </div>
    <div class="quantity-container">
      <input v-model.number="product.quantity" @change="changeQuantity(product.id, product.quantity)" type="number" min="1" max="10" />
    </div>
    <div class="remove-product-container">
      <button class="close" @click="removeProductFromCart">
        <span>&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../../../../main'

export default {
  props: ['product'],
    data() {
    return {
      quantity: 0
    }
  },
  methods: {
    removeProductFromCart() {
      eventBus.removeProductFromCart({...this.product});
    },
    changeQuantity(id, quantity) {
      eventBus.changeQuantity(id, quantity);
    }
  }

}
</script>

<style scoped>

span {
  text-align: center;
}

.cart-row {
  height: 75px;
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

.product-img {
  height: 100%;
}

.product-container {
  height: 400px;
  padding: 15px;
}

p {
  font-size: 12px;
}
</style>
