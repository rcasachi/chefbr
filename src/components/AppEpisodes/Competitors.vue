<template>
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
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>