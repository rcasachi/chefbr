<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm12 md6>
                <v-card>
                    <v-toolbar>
                        <v-toolbar-title class="the-title"
                            >Console Application</v-toolbar-title
                        >
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                prepend-icon="fa-envelope"
                                name="email"
                                label="Email"
                                type="email"
                                v-model="info.email.value"
                                :rules="info.email.rules"
                                class="the-textfield"
                                required
                            >
                            </v-text-field>
                            <v-text-field
                                prepend-icon="fa-unlock-alt"
                                name="password"
                                label="Senha"
                                id="password"
                                type="password"
                                v-model="info.password.value"
                                :rules="info.password.rules"
                                class="the-textfield"
                                required
                            >
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red"
                            outlined
                            :disabled="!valid"
                            @click="submit"
                        >
                            Acessar
                            <v-icon right dark>fa-sign-in-alt</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            valid: false,
            info: {
                email: {
                    value: '',
                    rules: [
                        v => !!v || 'E-mail é obrigatório',
                        v => /.+@.+/.test(v) || 'Digite um e-mail válido'
                    ]
                },
                password: {
                    value: '',
                    rules: [
                        v => !!v || 'Senha é obrigatória',
                        v =>
                            v.length >= 6 ||
                            'Senha deve ser maior que 6 caracteres'
                    ]
                }
            }
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('auth/login', {
                    email: this.info.email.value,
                    password: this.info.password.value
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
