<template>
    <v-container fill-height>
        <v-layout justify-center>
            <v-flex xs12 sm11 md10>
                <v-card>
                    <v-toolbar>
                        <v-toolbar-title class="the-title"
                            >Nova Temporada</v-toolbar-title
                        >
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <beauty-text-field
                                name="name"
                                label="Nome"
                                v-model="info.name.value"
                                :rules="info.name.rules"
                            ></beauty-text-field>

                            <beauty-text-field
                                name="director"
                                label="Diretor"
                                v-model="info.director.value"
                                :rules="info.director.rules"
                            ></beauty-text-field>

                            <beauty-combobox
                                :items="presenters"
                                label="Apresentador"
                                item-text="name"
                                item-value="key"
                                item-img="photo"
                                v-model="info.presenter.value"
                            ></beauty-combobox>

                            <beauty-combobox
                                :items="judges"
                                label="Jurados"
                                item-text="name"
                                item-value="key"
                                item-img="photo"
                                v-model="info.judges.value"
                                multiple
                            ></beauty-combobox>

                            <beauty-date
                                label="Início"
                                v-model="info.start.value"
                            ></beauty-date>

                            <beauty-date
                                label="Final"
                                v-model="info.end.value"
                            ></beauty-date>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <beauty-button
                            label="Voltar"
                            icon="fas fa-arrow-left"
                            to="/console"
                            text
                        ></beauty-button>

                        <beauty-button
                            label="Salvar"
                            icon="far fa-save"
                            :disabled="!valid"
                            @action="submit"
                            outlined
                        ></beauty-button>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import BeautyTextField from '@/components/BeautyTextField';
import BeautyCombobox from '@/components/BeautyCombobox';
import BeautyDate from '@/components/BeautyDate';
import BeautyButton from '@/components/BeautyButton';
import helpers from '@/helpers';

export default {
    name: 'Login',
    components: {
        BeautyTextField,
        BeautyCombobox,
        BeautyDate,
        BeautyButton
    },
    computed: {
        presenters: vm =>
            helpers.snapToArray(vm.$store.state.presenters.presenters),
        judges: vm => helpers.snapToArray(vm.$store.state.judges.judges)
    },
    data(vm) {
        return {
            valid: false,
            info: {
                name: {
                    value: '',
                    rules: [v => !!v || 'Nome da temporada é obrigatória']
                },
                director: {
                    value: '',
                    rules: [v => !!v || 'Nome do diretor é obrigatório']
                },
                presenter: { value: '' },
                judges: [],
                start: { value: '' },
                end: { value: '' }
            }
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                let presenterKey = [];
                presenterKey[this.info.presenter.value.key] = true;

                let judgesKey = [];
                this.info.judges.value.map(arr => (judgesKey[arr.key] = true));

                this.$store.dispatch('seasons/save', {
                    values: {
                        name: this.info.name.value,
                        director: this.info.director.value,
                        presenters: presenterKey,
                        judges: judgesKey,
                        start: this.info.start.value,
                        end: this.info.end.value
                    },
                    route: '/console'
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
