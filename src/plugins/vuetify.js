import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: {
            base: '#232323'
        }
    },
    icons: {
        iconfont: 'fa'
    }
});
