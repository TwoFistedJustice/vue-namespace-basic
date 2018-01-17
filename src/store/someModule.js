
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
        // you don't need to do this for a local function, but it sure is easier to debug and read
        // commit('CHANGE_A_PROP');
        commit('someModule/CHANGE_A_PROP', null, { root: true });

        // ACTION DISPATCHED HERE
        dispatch('anotherModule/changeAnotherProp', null, { root: true });

        //syntax highliting works if I do it this way
        // dispatch('changeAnotherProp', null, { root: true });



    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
