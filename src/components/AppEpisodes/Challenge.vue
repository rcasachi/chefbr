<template>
    <v-card elevation="3" class="pa-2">
        <div class="the-title">Desafios</div>
        <v-row>
            <v-col>
                <beauty-text-field
                    name="challenge_name"
                    label="Nome"
                    v-model="challenge.name"
                    :key="`name${reload}`"
                    solo
                ></beauty-text-field>
            </v-col>
            <v-col>
                <beauty-autocomplete
                    name="challenge_type"
                    label="Tipo de Desafio"
                    :items="types"
                    v-model="challenge.type"
                    :key="`type${reload}`"
                    solo
                ></beauty-autocomplete>
            </v-col>
            <v-col>
                <beauty-text-field
                    name="challenge_duration"
                    label="Duração"
                    v-model="challenge.duration"
                    :key="`duration${reload}`"
                    solo
                ></beauty-text-field>
            </v-col>
            <v-col>
                <beauty-switch
                    name="challenge_team"
                    label="Prova de Times"
                    v-model="challenge.teams"
                    :key="`teams${reload}`"
                    solo
                ></beauty-switch>
            </v-col>
        </v-row>

        <v-divider class="my-0"></v-divider>

        <competitors v-model="competitors" :season="$props.season" :key="`competitors${reload}`"></competitors>

        <v-divider></v-divider>

        <v-row>
            <v-col>
                <v-btn color="grey darken-1" @click="addChallenge" text dark block>
                    Adicionar
                    <v-icon right dark>fas fa-plus</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-simple-table dark v-if="list.length > 0">
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Nome</th>
                        <th class="text-left">Duração</th>
                        <th class="text-left">Tipo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in list" :key="item.name">
                        <td small>{{ item.name }}</td>
                        <td small>{{ item.duration }}</td>
                        <td small>{{ item.type }}</td>
                        <td small>Excluir</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-card>
</template>

<script>
import BeautyTextField from '@/components/BeautyTextField';
import BeautyAutocomplete from '@/components/BeautyAutocomplete';
import BeautySwitch from '@/components/BeautySwitch';
import Competitors from '@/components/AppEpisodes/Competitors';

export default {
    name: 'Challenge',
    components: {
        BeautyTextField, BeautyAutocomplete, BeautySwitch, Competitors
    },
    props: ['value', 'season'],
    data() {
        return {
            challenge: {
                name: '',
                type: '',
                duration: '',
                teams: true
            },
            types: ['Prova de Eliminação', 'Caixa Misteriosa'],
            competitors: [],
            list: this.$props.value || [],
            reload: true
        }
    },
    methods: {
        addChallenge() {
            this.list.push({
                name: this.challenge.name,
                duration: this.challenge.duration,
                type: this.challenge.type,
                teams: this.challenge.teams,
                competitors: this.competitors
            });

            this.$emit('input', this.list);

            this.challenge.name = 
            this.challenge.duration = 
            this.challenge.type = 
            this.challenge.teams = null;
            this.competitors = [];

            this.reload = !this.reload;
        }
    }
}
</script>

<style scoped>

</style>