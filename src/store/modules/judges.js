import utils from '@/firebase/utils';
import helpers from '@/helpers';
import router from '@/router';

const state = {
    judges: []
};

const getters = {
    byId: state => key => {
        let values = helpers.snapToArray(state.judges);
        return values.find(judge => judge.key === key);
    }
};

const actions = {
    init() {
        utils.list(
            'judges',
            resp => this.commit('judges/set', resp.val()),
            null
        );
    },
    save({ commit }, { values, route }) {
        utils.save('judges', values).then(() => router.push(route));
    }
};

const mutations = {
    set(state, payload) {
        state.judges = payload;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
