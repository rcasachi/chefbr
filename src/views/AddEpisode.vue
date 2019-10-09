<template>
    <v-container fill-height>
        <v-layout justify-center>
            <v-flex xs12 sm11 md10>
                <v-card>
                    <v-toolbar>
                        <v-toolbar-title class="the-title">Novo Episódio</v-toolbar-title
                        >
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <beauty-text-field
                                name="order"
                                label="Ordem"
                                v-model="info.order.value"
                                :rules="info.order.rules"
                            ></beauty-text-field>

                            <beauty-text-field
                                name="youtube"
                                label="Link do Youtube"
                                v-model="info.youtube.value"
                                :rules="info.youtube.rules"
                            ></beauty-text-field>

                            <beauty-text-field
                                name="audience"
                                label="Audiência"
                                v-model="info.audience.value"
                                :rules="info.audience.rules"
                            ></beauty-text-field>

                            <beauty-date
                                label="Data de Apresentação"
                                v-model="info.date.value"
                            ></beauty-date>
                            
                            <invited v-model="info.guests.value" class="mb-2"></invited>

                            <challenge class="mb-2"></challenge>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red" text to="/console">
                            <v-icon left dark>fas fa-arrow-left</v-icon>
                            Voltar
                        </v-btn>
                        <v-btn
                            color="red"
                            outlined
                            :disabled="!valid"
                            @click="submit"
                        >
                            Salvar
                            <v-icon right dark>far fa-save</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import BeautyTextField from '@/components/BeautyTextField';
import BeautyDate from '@/components/BeautyDate';
import Invited from '@/components/AppEpisodes/Invited';
import Challenge from '@/components/AppEpisodes/Challenge';
import firebase from 'firebase';
import router from '@/router';

export default {
    name: 'AddJudge',
    components: {
        BeautyTextField, BeautyDate, Invited, Challenge
    },
    data() {
        return {
            valid: false,
            date: '',
            competitors: [],
            info: {
                order: {
                    value: '',
                    rules: [v => !!v || 'Ordem é obrigatória']
                },
                youtube: {
                    value: '',
                    rules: [v => !!v || 'Link do Youtube é obrigatório']
                },
                audience: {
                    value: '',
                    rules: [v => !!v || 'Audiência é obrigatória']
                },
                date: {
                    value: '',
                    formatted: '',
                    rules: [v => !!v || 'Data de Apresentação é obrigatória']
                },
                guests: { value: [] },
                challenges: {
                    value: [],
                    types: ['Prova de Eliminação', 'Caixa Misteriosa'],
                    name: '',
                    duration: '',
                    type: '',
                    teams: false,
                    competitors: [],
                    competitor: {
                        key: '',
                        team: '',
                        recipes: '',
                        result: ''
                    }
                }
            }
        };
    },
    watch: {
        date: function(val) {
            this.info.date.formatted = this.formatDate(this.info.date.value);
        }
    },
    mounted() {
        this.getCompetitors();
    },
    methods: {
        submit() {
            firebase
                .database()
                .ref()
                .child('seasons/' + this.$route.params.key)
                .child('episodes')
                .push({
                    order: this.info.order.value,
                    youtube: this.info.youtube.value,
                    date: this.info.date.value,
                    audience: this.info.audience.value,
                    guests: this.info.guests.value,
                    challenges: this.info.challenges.value
                })
                .then(() => router.push('/console'));
        },
        addCompetitor() {
            this.info.challenges.competitors[
                this.info.challenges.competitor.key.key
            ] = {
                team: this.info.challenges.competitor.team,
                recipes: this.info.challenges.competitor.recipes,
                result: this.info.challenges.competitor.result
            };

            this.info.challenges.competitor.key = this.info.challenges.competitor.result = this.info.challenges.competitor.team = this.info.challenges.competitor.recipes =
                '';

            console.log(this.info.challenges.competitors);
        },
        addChallenge() {
            this.info.challenges.value.push({
                name: this.info.challenges.name,
                duration: this.info.challenges.duration,
                type: this.info.challenges.type,
                teams: this.info.challenges.teams,
                competitors: this.info.challenges.competitors
            });

            this.info.challenges.name = this.info.challenges.duration = this.info.challenges.type = this.info.challenges.teams = this.info.challenges.competitors =
                '';
        },
        formatDate(date) {
            if (!date) return null;

            const [year, month, day] = date.split('-');
            return `${day}/${month}/${year}`;
        },
        parseDate(date) {
            if (!date) return null;

            const [day, month, year] = date.split('/');
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        },
        getCompetitors() {
            firebase
                .database()
                .ref(`seasons/${this.$route.params.key}/competitors`)
                .on(
                    'value',
                    snapshot =>
                        (this.competitors = this.snapToArray(snapshot.val()))
                );
        },
        snapToArray(snapshot) {
            return Object.entries(snapshot).map(e =>
                Object.assign(e[1], { key: e[0] })
            );
        }
    }
};
</script>

<style scoped>
.the-title {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
}
</style>
