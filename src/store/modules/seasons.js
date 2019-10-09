import utils from '@/firebase/utils';
import helpers from '@/helpers';
import router from '@/router';

const state = {
    seasons: []
};

const getters = {};

const actions = {
    init() {
        utils.list(
            'seasons',
            resp => this.commit('seasons/set', resp.val()),
            null
        );
    },
    save({ commit }, { values, route }) {
        utils.save('seasons', values).then(() => router.push(route));
    },
    saveCompetitor({ commit }, { values, keySeason, route }) {
        utils
            .saveToChild(`seasons/${keySeason}`, 'competitors', values)
            .then(() => router.push(route));
    }
};

const mutations = {
    set(state, payload) {
        let values = helpers.snapToArray(payload);

        values = values.map(season => {
            season.presenters = helpers
                .snapToArray(season.presenters)
                .map(presenter =>
                    this.getters['presenters/byId'](presenter.key)
                );

            season.judges = helpers
                .snapToArray(season.judges)
                .map(judge => this.getters['judges/byId'](judge.key));

            return season;
        });

        state.seasons = values;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
