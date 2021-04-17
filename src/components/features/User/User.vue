<template>
    <div class="d-flex flex-row shop-container">
      <transition name="left" appear>
        <shop :products="products" class="w-100"></shop>
      </transition>
    </div>
</template>

<script>

import Shop from './Shop/Shop';
import { mapState } from 'vuex';

export default {
  components: { 
    Shop
  },
  computed: {
    ...mapState('product', {
      products: 'datas'
    }),
  },
  created() {
    this.$store.dispatch('product/fetchDatas');
  }
}
</script>

<style scoped>

@keyframes fromleft {
  from {
    transform: translateX(-20px);
  }
  to { }
}

@keyframes fromright {
  from {
    transform: translateX(20px);
  } 
  to { }
}

.left-enter-active {
  animation: fromleft 1s;
}

.right-enter-active {
  animation: fromright 1s;
}

.shop-container {
  padding: 0px 15px;
}

</style>
