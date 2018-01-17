
const state = {
    aProp: 'Hello',

  // Cross module getters
    thing2Get: 'I got the thing!!'
};

const getters = {

    GetaProp (state) {
        return state.aProp;
    },

  // Cross module getters
    getTheThing(state){
        return state.thing2Get;
    }
};

const mutations = {

    CHANGE_A_PROP (state) {
        if(state.aProp === 'Hello'){
            state.aProp = "Goodbye";
        } else {
            state.aProp = "Hello";
        }
    }
};

const actions = {
    changeaProp ({ dispatch, commit }){

        // you can do it either way for a local function
        // commit('CHANGE_A_PROP');
        commit('someModule/CHANGE_A_PROP', null, { root: true });

        // ACTION DISPATCHED HERE
        dispatch('anotherModule/changeAnotherProp', null, { root: true });




    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
