import { createRouter, createWebHistory } from 'vue-router'
import User from './components/features/User/User';
import Cart from './components/features/User/Cart/Cart';
import Admin from './components/features/Admin/Admin';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/shop', component: User },
        { path: '/cart', component: Cart },
        { path: '/admin', component: Admin },
        { path: '/:pathMatch(.*)*', name: 'not-found', redirect: '/shop' }
    ]
});

export default router;