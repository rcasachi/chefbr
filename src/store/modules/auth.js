import utils from '@/firebase/utils';
import router from '@/router';

const state = {
    user: null,
    isAuthenticated: false
};

const getters = {
    isAuthenticated(state) {
        return state.user !== null && state.user !== undefined;
    }
};

const actions = {
    login({ commit }, { email, password }) {
        utils
            .login(email, password)
            .then(user => {
                commit('setUser', user);
                commit('setIsAuthenticated', true);
                router.push('/console');
            })
            .catch(() => {
                commit('setUser', null);
                commit('setIsAuthenticated', false);
                router.push('/');
            });
    },
    logout({ commit }) {
        utils
            .logout()
            .then(() => {
                commit('setUser', null);
                commit('setIsAuthenticated', false);
                router.push('/');
            })
            .catch(() => {
                commit('setUser', null);
                commit('setIsAuthenticated', false);
                router.push('/');
            });
    }
};

const mutations = {
    setUser(state, payload) {
        state.user = payload;
    },
    setIsAuthenticated(state, payload) {
        state.isAuthenticated = payload;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
