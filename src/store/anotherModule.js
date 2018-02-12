const state = {
    anotherProp: 'Bonjour!'
};

const getters = {

    GetAnotherProp (state) {
        return state.anotherProp;
    },


  // Cross module getters
    getTheGetter(state, getters, rootState, rootGetters) {
      console.log('attempting get');
        // rootGetters.getTheThing; //does not work
      // rootGetters['someModule/getTheThing']; //still does not work - need to RETURN
      return rootGetters['someModule/getTheThing']; //still does not work

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

