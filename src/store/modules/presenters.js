import utils from '@/firebase/utils';
import helpers from '@/helpers';
import router from '@/router';

const state = {
    presenters: []
};

const getters = {
    byId: state => key => {
        let values = helpers.snapToArray(state.presenters);
        return values.find(presenter => presenter.key === key);
    }
};

const actions = {
    init() {
        utils.list(
            'presenters',
            resp => this.commit('presenters/set', resp.val()),
            null
        );
    },
    save({ commit }, { values, route }) {
        utils.save('presenters', values).then(() => router.push(route));
    }
};

const mutations = {
    set(state, payload) {
        state.presenters = payload;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
