import Vue from 'vue';
import Vuex from 'vuex';
import someModule from './someModule';
import anotherModule from './anotherModule';

Vue.use(Vuex);

//don't export like this, namespacing won't work
// export default new Vuex.Store({

// Note the uppercase 'S' in .Store
export const store = new Vuex.Store({
state:{},
getters:{},
mutations:{},
actions:{},
modules: {

    someModule,
    anotherModule

}

});

// export default store;

