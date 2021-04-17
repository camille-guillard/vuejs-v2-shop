import Vue from 'vue';
import VueRouter from 'vue-router';
import User from './components/features/User/User';
import Cart from './components/features/User/Cart/Cart';
import Admin from './components/features/Admin/Admin';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/shop', component: User },
        { path: '/cart', component: Cart },
        { path: '/admin', component: Admin },
        { path: '**', redirect: '/shop' }
    ]
});

export default router;