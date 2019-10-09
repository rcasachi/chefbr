<template>
    <v-card elevation="3" class="pa-2">
        <div class="the-title">Convidados</div>
        <v-row>
            <v-col>
                <beauty-text-field
                    name="guest_name"
                    label="Nome"
                    v-model="name"
                    solo
                ></beauty-text-field>
            </v-col>
            <v-col>
                <beauty-text-field
                    name="guest_link"
                    label="Link Social"
                    v-model="link"
                    solo
                ></beauty-text-field>
            </v-col>
            <v-col>
                <v-btn color="grey darken-1" @click="addGuest($event)" text dark>
                    Adicionar
                    <v-icon right dark>fas fa-plus</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-simple-table v-if="list.length > 0" dark>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Nome</th>
                        <th class="text-left">Link</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in list" :key="item.name">
                        <td small>{{ item.name }}</td>
                        <td small>{{ item.link }}</td>
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
    name: 'Invited',
    components: {
        BeautyTextField
    },
    props: ['value'],
    data() {
        return {
            name: '',
            link: '',
            list: this.$props.value || []
        }
    },
    methods: {
        addGuest($event) {
            this.list.push({ name: this.name, link: this.link });
            this.name = '';
            this.$emit('input', this.list);
        }
    }
}
</script>

<style scoped>
.the-title {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
}
</style>