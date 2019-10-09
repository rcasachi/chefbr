<template>
    <v-navigation-drawer
        class="the-left-drawer"
        :floating="true"
        :permanent="true"
        app
        dark
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title ml-4">ChefBR</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.link"
                link
            >
                <v-list-item-icon
                    ><v-icon>{{ item.icon }}</v-icon></v-list-item-icon
                >

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item to="/console" v-if="isAuthenticated">
                <v-list-item-icon><v-icon>fas fa-cog</v-icon></v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Console Application</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <template v-slot:append>
            <div class="pa-2">
                <v-btn
                    v-if="isAuthenticated"
                    class="black"
                    block
                    @click="logout"
                    >Logout</v-btn
                >
                <v-btn v-else block to="/login" class="black">Login</v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'AppLeftDrawer',
    computed: {
        isAuthenticated: vm => vm.$store.state.auth.isAuthenticated
    },
    data() {
        return {
            items: [
                { title: 'Episódios', icon: 'fas fa-play-circle', link: '/' },
                {
                    title: 'Temporadas',
                    icon: 'fas fa-video',
                    link: '/temporadas'
                },
                {
                    title: 'Apresentadores',
                    icon: 'fas fa-microphone-alt',
                    link: '/apresentadores'
                },
                { title: 'Jurados', icon: 'fas fa-trophy', link: '/jurados' }
            ]
        };
    },
    methods: {
        logout() {
            this.$store.dispatch('auth/logout');
        }
    }
};
</script>

<style scoped>
.the-left-drawer {
    background-color: #4f2431 !important;
}
.v-application .title {
    font-family: 'Open Sans Condensed', sans-serif !important;
    font-weight: bold;
}
</style>
