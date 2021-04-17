<template>
  <div class="col-xl-3 col-lg-6 col-sm-6 border product-container d-flex flex-column">
    <div class="d-flex flex-row justify-content-center img-container">
      <img class="product-img" :src="product.img" :alt="product.title" />
    </div>
    <div class="d-flex flex-row justify-content-center">
      <h3>{{ product.title }}</h3>
      <hr>
    </div>
    <div>
      <p>{{ product.description | maxLength(150) }}</p>
    </div>
    <div class="price-container">
      <span>Prix: {{ product.price | price }}</span>
    </div>
    <div class="shopping-button-container d-flex justify-content-center">
      <button @click="addProductToCart" class="btn btn-primary btn-sm float-right shopping-button">Commander</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../../../../main'

export default {
  props: ['product'],
  methods: {
    addProductToCart() {
      eventBus.addProductToCart({...this.product})
    }
  }

}
</script>

<style scoped>

.product-container {
  height: 600px;
  padding: 15px;
  position: relative;
}

.img-container {
  height: 50%;
}

.shopping-button-container {
  position : absolute;
  left: 0px;
  bottom: 5%;
  width: 100%;
}

.shopping-button {
  width: 90%;
}

p {
  font-size: 12px;
}

</style>
