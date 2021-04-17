<template>
  <transition appear>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">
        <img src="../assets/logo.png" height="30px" width="30px" alt="Vue Shop" />
        Vue Shop
      </a>
      <button class="navbar-toggler">
        <span class="navbar-toggler-icon" v-trigger-collapse="'collapse'"></span>
      </button>
        <div id="collapse" class="collapse navbar-collapse">
          <div class="col-11">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/shop" >Boutique</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin" >Admin</router-link>
              </li>
            </ul>
          </div>
          <div class="col-1 cart-container">
            <router-link class="nav-link" to="/cart" >
              <img src="https://image.flaticon.com/icons/png/512/14/14674.png" height="30px" width="30px" alt="Vue Shop" />
              <span>({{ quantity }})</span>
            </router-link>
          </div>
      </div>
    </nav>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('cart', ['quantity'])
  },
  directives: {
    triggerCollapse: {
      inserted(el, binding) {
        window.addEventListener('click', () => {
          nav.classList.remove('show')
        })
        const nav = document.querySelector(`#${binding.value}`);
        el.addEventListener('click', (e) => {
          if (nav.classList.contains('show')) {
            nav.classList.remove('show')
          } else {
            nav.classList.add('show')
          }
          e.stopPropagation();
        })
      }
    }
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
}

@keyframes fromtop {
  from {
    transform: translateY(-20px);
  } 
  to { }
}

.cart-container {
  display: ruby;
}

.v-enter-active {
  animation: fromtop 1s;
}

.router-link-active {
  font-weight: bold;
}

.navbar {
    position: fixed;
    z-index: 100;
    width: 100%;
}

span {
  color: #222222;
}

</style>
