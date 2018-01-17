const state = {
    anotherProp: 'Bonjour!'
};

const getters = {

    GetAnotherProp (state) {
        return state.anotherProp;
    },


  // Cross module getters
    getTheGetter(state, getters, rootState, rootGetters) {
        getters.getTheThing;
    }
};

const mutations = {

    CHANGE_ANOTHER_PROP (state) {
        if(state.anotherProp === 'Bonjour!'){
            state.anotherProp = "Au Revoir!";
        } else {
            state.anotherProp = "Bonjour!";
        }
    }
};

const actions = {


  // Dispatch works, but not recognized by syntax highlighting when using vuex auto-namespacing
    changeAnotherProp ({commit}){
        commit('CHANGE_ANOTHER_PROP');
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

