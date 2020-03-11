<template>
    <v-card class="mx-3 my-2" flat>
        <v-card-title>Temporadas</v-card-title>
        <v-list>
            <v-list-group
                v-for="item in seasons"
                :key="item.key"
                active-class="red--text"
                no-action dark
            >
                <template v-slot:activator>
                    <v-list-item-avatar height="75" width="75">
                        <v-img src="https://upload.wikimedia.org/wikipedia/pt/e/e8/MasterChef_Brasil.jpg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                        <v-list-item-subtitle v-text="`${item.start} - ${item.end}`"></v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-btn outlined small class="blue-grey">Assistir</v-btn>
                    </v-list-item-action>
                </template>

                <v-list-item>
                    <v-list-item-content dense>
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
                        ></beauty-item>


                        <code>{{ item }}</code>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-card>
</template>

<script>
import BeautyItem from '@/components/BeautyItem';

export default {
    components: {
        BeautyItem
    },
    computed: {
        seasons: vm => vm.$store.state.seasons.seasons
    }
};
</script>
