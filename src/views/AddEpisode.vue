<template>
    <v-container fill-height>
        <v-layout justify-center>
            <v-flex xs12 sm11 md10>
                <v-card>
                    <v-toolbar>
                        <v-toolbar-title class="the-title"
                            >Novo Episódio</v-toolbar-title
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

                            <v-card elevation="3" class="pa-2">
                                <div class="the-title">Convidados</div>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            name="guest_name"
                                            label="Nome"
                                            id="guest_name"
                                            type="text"
                                            required
                                            dense
                                            solo
                                            v-model="info.guests.name"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                            name="guest_link"
                                            label="Link Social"
                                            id="guest_link"
                                            type="text"
                                            required
                                            dense
                                            solo
                                            v-model="info.guests.link"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-btn
                                            color="grey darken-1"
                                            @click="addGuest"
                                            text
                                            dark
                                        >
                                            Adicionar
                                            <v-icon right dark
                                                >fas fa-plus</v-icon
                                            >
                                        </v-btn>
                                    </v-col>
                                </v-row>

                                <v-simple-table
                                    dark
                                    v-if="info.guests.value.length > 0"
                                >
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left">Nome</th>
                                                <th class="text-left">Link</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="item in info.guests
                                                    .value"
                                                :key="item.name"
                                            >
                                                <td small>{{ item.name }}</td>
                                                <td small>{{ item.link }}</td>
                                                <td small>Excluir</td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-card>

                            <v-card elevation="3" class="pa-2">
                                <div class="the-title">Desafios</div>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            name="challenge_name"
                                            label="Nome"
                                            id="challenge_name"
                                            type="text"
                                            required
                                            dense
                                            solo
                                            v-model="info.challenges.name"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-autocomplete
                                            name="challenge_type"
                                            label="Tipo de Desafio"
                                            id="challenge_type"
                                            :items="info.challenges.types"
                                            v-model="info.challenges.type"
                                            item-color="red"
                                            required
                                            dense
                                            solo
                                        ></v-autocomplete>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                            name="challenge_duration"
                                            label="Duração"
                                            id="challenge_duration"
                                            type="text"
                                            required
                                            dense
                                            solo
                                            v-model="info.challenges.duration"
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-switch
                                            name="challenge_team"
                                            label="Prova de Times"
                                            id="challenge_team"
                                            color="red"
                                            required
                                            dense
                                            solo
                                            v-model="info.challenges.teams"
                                        ></v-switch>
                                    </v-col>
                                </v-row>

                                <v-divider class="my-0"></v-divider>

                                <v-row>
                                    <v-col>
                                        <v-combobox
                                            v-model="
                                                info.challenges.competitor.key
                                            "
                                            :items="competitors"
                                            label="Participante"
                                            item-text="name"
                                            item-value="key"
                                            chips
                                            eager
                                            dense
                                            solo
                                        >
                                            <template v-slot:selection="data">
                                                <v-chip>
                                                    <v-avatar left>
                                                        <img
                                                            :src="
                                                                data.item.photo
                                                            "
                                                            alt="avatar"
                                                        />
                                                    </v-avatar>
                                                    {{ data.item.name }}
                                                </v-chip>
                                            </template>
                                        </v-combobox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                            name="comp_team"
                                            label="Time"
                                            id="comp_team"
                                            type="text"
                                            required
                                            dense
                                            solo
                                            v-model="
                                                info.challenges.competitor.team
                                            "
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                            name="comp_recipes"
                                            label="Receitas"
                                            id="comp_recipes"
                                            type="text"
                                            required
                                            dense
                                            solo
                                            v-model="
                                                info.challenges.competitor
                                                    .recipes
                                            "
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                            name="comp_result"
                                            label="Resultado"
                                            id="comp_result"
                                            type="text"
                                            required
                                            dense
                                            solo
                                            v-model="
                                                info.challenges.competitor
                                                    .result
                                            "
                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-btn
                                            color="grey darken-1"
                                            @click="addCompetitor"
                                            text
                                            dark
                                        >
                                            <v-icon right dark
                                                >fas fa-plus</v-icon
                                            >
                                        </v-btn>
                                    </v-col>
                                </v-row>

                                <v-chip-group column px-6>
                                    <v-chip
                                        v-for="competitor in info.challenges
                                            .competitors"
                                        :key="competitor.key"
                                    >
                                        <v-avatar left>
                                            <v-img
                                                :src="
                                                    competitors.filter(
                                                        el =>
                                                            el.key ===
                                                            competitor.key
                                                    ).photo
                                                "
                                                position="top center"
                                                :alt="
                                                    competitors.filter(
                                                        el =>
                                                            el.key ===
                                                            competitor.key
                                                    ).name
                                                "
                                            >
                                            </v-img>
                                        </v-avatar>
                                        {{
                                            competitors.filter(
                                                el => el.key === competitor.key
                                            ).name
                                        }}
                                    </v-chip>
                                </v-chip-group>

                                <v-divider></v-divider>

                                <v-row>
                                    <v-col>
                                        <v-btn
                                            color="grey darken-1"
                                            @click="addChallenge"
                                            text
                                            dark
                                            block
                                        >
                                            Adicionar
                                            <v-icon right dark
                                                >fas fa-plus</v-icon
                                            >
                                        </v-btn>
                                    </v-col>
                                </v-row>

                                <v-simple-table
                                    dark
                                    v-if="info.challenges.value.length > 0"
                                >
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left">Nome</th>
                                                <th class="text-left">
                                                    Duração
                                                </th>
                                                <th class="text-left">Tipo</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="item in info.challenges
                                                    .value"
                                                :key="item.name"
                                            >
                                                <td small>{{ item.name }}</td>
                                                <td small>
                                                    {{ item.duration }}
                                                </td>
                                                <td small>{{ item.type }}</td>
                                                <td small>Excluir</td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-card>
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
import firebase from 'firebase';
import router from '@/router';

export default {
    name: 'AddJudge',
    components: {
        BeautyTextField,
        BeautyDate
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
                guests: {
                    value: [],
                    name: '',
                    link: ''
                },
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
        addGuest() {
            this.info.guests.value.push({
                name: this.info.guests.name,
                link: this.info.guests.link
            });

            this.info.guests.name = this.info.guests.link = '';
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
