<template>
    <v-app dark>
        <app-left-drawer></app-left-drawer>

        <v-content transition="slide-x-transition" class="the-content">
            <router-view></router-view>
        </v-content>

        <app-right-drawer></app-right-drawer>

        <app-footer></app-footer>

        <v-overlay :value="overlay" color="#333" absolute>
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </v-app>
</template>

<script>
import AppLeftDrawer from '@/components/AppLeftDrawer';
import AppRightDrawer from '@/components/AppRightDrawer';
import AppFooter from '@/components/AppFooter';
import helpers from './helpers';

export default {
    name: 'App',
    data() {
        return {
            overlay: true
        };
    },
    components: {
        AppLeftDrawer,
        AppRightDrawer,
        AppFooter
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            await this.$store.dispatch('presenters/init');
            await this.$store.dispatch('judges/init');
            await this.$store.dispatch('seasons/init');
            await helpers.sleep(1000);
            this.overlay = false;
        }
    }
};
</script>

<style>
*:not(i) {
    font-family: 'Open Sans Condensed', sans-serif !important;
}
.the-content {
    background-color: #232323 !important;
}
a {
    color: #db1d40 !important;
    text-decoration: none;
    font-weight: bold;
}
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px #434343 inset;
    -webkit-text-fill-color: #fff;
}
</style>
