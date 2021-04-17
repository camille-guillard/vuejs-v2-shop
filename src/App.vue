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
  }
}
</script>

<style>
  .router { padding-top: 70px; }
</style>
