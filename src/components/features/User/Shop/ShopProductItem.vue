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
      <p>{{ maxLength(product.description, 150) }}</p>
    </div>
    <div class="price-container">
      <span>Prix: {{ price(product.price) }}</span>
    </div>
    <div class="shopping-button-container d-flex justify-content-center">
      <button @click="addOne(product)" class="btn btn-primary btn-sm float-right shopping-button">Ajouter au panier</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['product'],
  methods: {
    ...mapMutations('cart', ['addOne']),
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
