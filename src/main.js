import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';

import router from './router';
import store from './store';

import currencyFilter from './shared/currency-filter';

Vue.config.productionTip = false;

Vue.filter('currency', currencyFilter);
Vue.use(BootstrapVue);

new Vue({
    render: (h) => h(App),
    router,
    store,
    BootstrapVue
}).$mount('#app');
