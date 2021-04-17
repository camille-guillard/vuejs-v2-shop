<template>
  <div id="app">
    <the-header></the-header>
    <div class="router d-flex flex-column w-100">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'app',
  components: {
    TheHeader
  },
	methods: {
		trim(s,len) {
			if(!len) len = 50;
			if(s.length < len) return s;
			return s.substring(0,len-3) + '...';
    },
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

<style>
  .router { padding-top: 70px; }
</style>
