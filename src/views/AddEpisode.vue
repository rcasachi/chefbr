<template>
    <v-container fill-height>
        <v-layout justify-center>
            <v-flex xs12 sm11 md10>
                <v-card>
                    <v-toolbar>
                        <v-toolbar-title class="the-title">Novo Episódio</v-toolbar-title>
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

                            <challenge 
                                v-model="info.challenges.value" 
                                :season="$route.params.key"
                                class="mb-2"
                            ></challenge>
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

export default {
    name: 'AddEpisode',
    components: {
        BeautyTextField, BeautyDate, Invited, Challenge
    },
    data() {
        return {
            valid: false,
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
                challenges: { value: [] }
            }
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('seasons/saveEpisode', {
                    values: {
                        order: this.info.order.value,
                        youtube: this.info.youtube.value,
                        date: this.info.date.value,
                        audience: this.info.audience.value,
                        guests: this.info.guests.value,
                        challenges: this.info.challenges.value
                    },
                    route: '/console',
                    keySeason: this.$route.params.key
                });
            }
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
