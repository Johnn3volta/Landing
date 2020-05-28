import Vue from 'vue';
import Vuex from 'vuex';
import App from '../components/app';
import Top from '../components/header';
import Bot from '../components/footer';
import Overlay from '../components/overlay';
import Callback from '../components/form';
import Politic from '../components/politic';
import Thanks from '../components/thanks';

Vue.use(Vuex);

require('@babel/polyfill');
require('./polyfill-foreach');

const store = new Vuex.Store({
    state: {
        dynamicComponent: {
            show: false,
            name: ''
        },
    },
    mutations: {
        changer(state, payload) {
            state.dynamicComponent = { ...payload };
        }
    },
    actions: {
        changer({ commit }, payload) {
            commit('changer', payload);
        }
    },
    getters: {
        show: state => state.dynamicComponent.show,
        name: state => state.dynamicComponent.name
    }
});

new Vue({
    el: '#app',
    store,
    data: {},
    components: {
        Top,
        App,
        Bot,
        Overlay,
        Callback,
        Politic,
        Thanks
    },
    mounted() {
        // document.addEventListener('contextmenu', event => event.preventDefault());
        // document.onkeydown = function (e) {
        //     if (window.event.keyCode == 123 || e.button == 2)
        //         return false;
        // };
    }
});
