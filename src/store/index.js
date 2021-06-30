import Vue from 'vue';
import Vuex from 'vuex';

import robotModule from './modules/robots';
import userModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        foo: 'root-foo',
    },
    modules: {
        robots: robotModule,
        users: userModule,
    },
    getters: {
        foo(state) {
            return `root-getter / ${state.foo}`;
        },
    },
});
