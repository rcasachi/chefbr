<template>
    <div>
        <v-row>
            <v-col>
                <beauty-combobox
                    :items="competitors"
                    label="Participante"
                    item-text="name"
                    item-value="key"
                    item-img="photo"
                    v-model="competitor.key"
                    solo
                    :key="`competitor${reload}`"
                ></beauty-combobox>
            </v-col>
            <v-col>
                <beauty-text-field
                    name="comp_team"
                    label="Time"
                    v-model="competitor.team"
                    solo
                    :key="`team${reload}`"
                ></beauty-text-field>
            </v-col>
            <v-col>
                <beauty-text-field
                    name="comp_recipes"
                    label="Receitas"
                    v-model="competitor.recipes"
                    solo
                    :key="`recipes${reload}`"
                ></beauty-text-field>
            </v-col>
            <v-col>
                <beauty-text-field
                    name="comp_result"
                    label="Resultado"
                    v-model="competitor.result"
                    solo
                    :key="`result${reload}`"
                ></beauty-text-field>
            </v-col>
            <v-col>
                <v-btn color="grey darken-1" @click="addCompetitor" text dark>
                    <v-icon center dark>fas fa-plus</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-chip-group column>
            <v-chip v-for="(item, index) in Object.entries(list)" :key="index">
                <v-avatar left>
                    <v-img :src="competitors.filter(el => el.key == item[0])[0].photo"
                        position="top center" :alt="competitors.filter(el => el.key == item[0])[0].name"
                    ></v-img>
                </v-avatar>
                {{ competitors.filter(el => el.key == item[0])[0].name }}
            </v-chip>
        </v-chip-group>
        
    </div>
</template>

<script>
import BeautyCombobox from '@/components/BeautyCombobox';
import BeautyTextField from '@/components/BeautyTextField';
import helpers from '@/helpers';

export default {
    name: 'Competitors',
    components: {
        BeautyCombobox, BeautyTextField
    },
    computed: {
        competitors: vm => {
            let seasonKey = vm.$props.season;
            let listSeasons = helpers.mutateToArray(vm.$store.state.seasons.seasons);
            let thisSeason = listSeasons.filter(m => m[7] === seasonKey);
            return thisSeason[0][0];
        }
    },
    props: ['value', 'season'],
    data() {
        return {
            competitor: {
                key: '',
                team: '',
                recipes: '',
                result: ''
            },
            list: this.$props.value || [],
            reload: true
        }
    },
    methods: {
        addCompetitor() {
            this.list[this.competitor.key.key] = {
                team: this.competitor.team,
                recipes: this.competitor.recipes,
                result: this.competitor.result
            };

            this.$emit('input', this.list);

            this.competitor.key = 
            this.competitor.team = 
            this.competitor.recipes =
            this.competitor.result = '';

            this.reload = !this.reload;
        }
    }
}
</script>