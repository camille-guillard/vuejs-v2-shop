import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const product = {
    namespaced: true,
    state: {
        datas: []
    },
    mutations: {
        addOne(state, product) {
            state.datas.push(product);
        },
        addMany(state, products) {
            state.datas = products;
        }
    },
    actions: {
        fetchDatas(context) {
            axios.get('products.json').then(res => {
                const data = res.data;
                context.commit('addMany', Object.keys(data).map(key => data[key]));
            })
        },
        saveOne(context, product) {
            product = { ...product, id: context.state.datas.length + 1 };
            axios.post('products.json', product).then(() => {
                this.products = [ ...this.products, product];
                context.commit('addOne', product)
            });
        }
    }
}

const cart = {
    namespaced: true,
    state: {
        datas: []
    },
    mutations: {
        addOne(state, product) {
            if (!state.datas.map( i => i.id).includes(product.id)) {
                state.datas.push({...product, quantity: 1});
            } else {
                state.datas.filter(p => p.id == product.id).forEach(p => {p.quantity++});
            }
        },
        deleteOne(state, id) {
            const index = state.datas.findIndex(d => d.id === id)
            state.datas.splice(index, 1);
        },
        changeQuantity(state, { id, quantity }) {
            state.datas.filter(p => p.id == id).forEach(p => p.quantity = quantity);
        }
    },
    getters: {
        total(state) {
            return state.datas.reduce((acc, p) => {
                acc += p.price * p.quantity;
                return acc;
            }, 0);
        },
        quantity(state) {
            return state.datas.map( i => i.quantity).reduce((a,b) => a+b, 0);
        }
    }
}

const store = new Vuex.Store({
    modules: {
        product,
        cart
    }
});


export default store;
