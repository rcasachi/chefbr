<template>
    <v-card elevation="3" class="pa-2">
        <div class="the-title">Desafios</div>
        <v-row>
            <v-col>
                <beauty-text-field
                    name="challenge_name"
                    label="Nome"
                    v-model="name"
                    solo
                ></beauty-text-field>
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
                <beauty-text-field
                    name="challenge_duration"
                    label="Duração"
                    v-model="duration"
                    solo
                ></beauty-text-field>
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

        competitor

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
</template>

<script>
import BeautyTextField from '@/components/BeautyTextField';

export default {
    name: 'Challenge',
    components: {
        BeautyTextField
    },
    data() {
        return {
            name: '',
            duration: ''

        }
    }
}
</script>

<style scoped>

</style>