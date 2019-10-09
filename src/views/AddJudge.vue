<template>
    <v-container fill-height>
        <v-layout justify-center>
            <v-flex xs12 sm11 md10>
                <v-card>
                    <v-toolbar>
                        <v-toolbar-title class="the-title"
                            >Novo Jurado</v-toolbar-title
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

                            <beauty-textarea
                                name="description"
                                label="Descrição"
                                v-model="info.description.value"
                                :rules="info.description.rules"
                            >
                            </beauty-textarea>

                            <beauty-text-field
                                name="source"
                                label="Fonte"
                                v-model="info.source.value"
                                :rules="info.source.rules"
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
import BeautyTextarea from '@/components/BeautyTextarea';
import BeautyButton from '@/components/BeautyButton';

export default {
    name: 'AddJudge',
    components: {
        BeautyTextField,
        BeautyTextarea,
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
                description: {
                    value: '',
                    rules: [v => !!v || 'Descrição é obrigatória']
                },
                source: {
                    value: '',
                    rules: [v => !!v || 'Fonte da descrição é obrigatória']
                }
            }
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('judges/save', {
                    values: {
                        name: this.info.name.value,
                        photo: this.info.photo.value,
                        description: this.info.description.value,
                        source: this.info.source.value
                    },
                    route: '/jurados'
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
