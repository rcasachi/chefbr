<template>
    <v-container fill-height>
        <v-layout justify-center>
            <v-flex xs12 sm11 md10>
                <v-card>
                    <v-toolbar>
                        <v-toolbar-title class="the-title"
                            >Novo Competidor</v-toolbar-title
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
                                name="photo"
                                label="Link da Foto"
                                v-model="info.photo.value"
                                :rules="info.photo.rules"
                            ></beauty-text-field>

                            <beauty-text-field
                                name="age"
                                label="Idade"
                                v-model="info.age.value"
                                :rules="info.age.rules"
                            ></beauty-text-field>

                            <beauty-text-field
                                name="root"
                                label="Origem"
                                v-model="info.root.value"
                                :rules="info.root.rules"
                            ></beauty-text-field>

                            <beauty-text-field
                                name="occupation"
                                label="Ocupação"
                                v-model="info.occupation.value"
                                :rules="info.occupation.rules"
                            ></beauty-text-field>
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
import BeautyButton from '@/components/BeautyButton';

export default {
    name: 'AddCompetitor',
    components: {
        BeautyTextField,
        BeautyButton
    },
    data() {
        return {
            valid: false,
            info: {
                name: {
                    value: '',
                    rules: [v => !!v || 'Nome do jurado é obrigatório']
                },
                photo: {
                    value: '',
                    rules: [v => !!v || 'Link da Foto é obrigatória']
                },
                age: {
                    value: '',
                    rules: [v => !!v || 'Idade é obrigatória']
                },
                root: {
                    value: '',
                    rules: [v => !!v || 'Origem é obrigatória']
                },
                occupation: {
                    value: '',
                    rules: [v => !!v || 'Ocupação é obrigatória']
                }
            }
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('seasons/saveCompetitor', {
                    values: {
                        name: this.info.name.value,
                        photo: this.info.photo.value,
                        age: this.info.age.value,
                        root: this.info.root.value,
                        occupation: this.info.occupation.value
                    },
                    keySeason: this.$route.params.key,
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
