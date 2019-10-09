import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import judges from './modules/judges';
import presenters from './modules/presenters';
import seasons from './modules/seasons';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        judges,
        presenters,
        seasons
    }
});
