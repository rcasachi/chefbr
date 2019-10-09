<template>
    <v-container>
        <v-toolbar flat dense dark>
            <v-toolbar-title>Console Application</v-toolbar-title>

            <div class="flex-grow-1"></div>

            <v-toolbar-items>
                <v-btn text to="/console/add-season">Nova Temporada</v-btn>
                <v-btn text to="/console/add-presenter"
                    >Novo Apresentador</v-btn
                >
                <v-btn text to="/console/add-judge">Novo Jurado</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="seasons"
            single-expand
            item-key="name"
            show-expand
            :items-per-page="5"
        >
            <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length" class="pa-0">
                    <v-card tile>
                        <beauty-item
                            icon="fas fa-film"
                            :title="item.director"
                            subtitle="Diretor"
                        ></beauty-item>

                        <beauty-item
                            :img="item.presenters[0].photo"
                            :title="item.presenters[0].name"
                            subtitle="Apresentador"
                        ></beauty-item>

                        <beauty-item
                            icon="fas fa-trophy"
                            subtitle="Jurados"
                            :chips="item.judges"
                            chips-avatar="photo"
                            chips-title="name"
                        ></beauty-item>

                        <beauty-item
                            icon="fas fa-street-view"
                            subtitle="Competidores"
                            :chips="item.competitors"
                            chips-avatar="photo"
                            chips-title="name"
                            :chips-add="`/console/add-competitor/${item.key}`"
                        ></beauty-item>

                        <beauty-timeline
                            title="Episódios"
                            :lines="item.episodes"
                            :add-link="`/console/add-episode/${item.key}`"
                            add-title="Novo Episódio"
                        ></beauty-timeline>
                    </v-card>
                </td>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
import BeautyItem from '@/components/BeautyItem';
import BeautyTimeline from '@/components/BeautyTimeline';
import helpers from '@/helpers';

export default {
    components: {
        BeautyItem,
        BeautyTimeline
    },
    data() {
        return {
            headers: [
                { text: 'Temporada', value: 'name' },
                { text: 'Início', value: 'start' },
                { text: 'Fim', value: 'end' }
            ]
        };
    },
    computed: {
        seasons: vm => vm.$store.state.seasons.seasons
    }
};
</script>
