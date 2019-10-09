<template>
    <v-list-item two-line>
        <v-avatar color="grey darken-4 mr-3" left size="36px">
            <v-icon v-if="icon" dark>{{ icon }}</v-icon>
            <v-img v-if="img" :src="img" :alt="title"></v-img>
        </v-avatar>

        <v-list-item-content>
            <v-list-item-title v-if="title">{{ title }}</v-list-item-title>

            <v-chip-group column>
                <div v-if="chips">
                    <v-chip v-for="chip in chips" :key="chip.key">
                        <v-avatar left>
                            <v-img
                                :src="chip[chipsAvatar]"
                                position="top center"
                                :alt="chip[chipsTitle]"
                            >
                            </v-img>
                        </v-avatar>
                        {{ chip[chipsTitle] }}
                    </v-chip>
                </div>

                <v-chip v-if="chipsAdd" :to="chipsAdd">
                    <v-icon dark>fas fa-plus</v-icon>
                </v-chip>
            </v-chip-group>

            <v-list-item-subtitle v-if="subtitle">{{
                subtitle
            }}</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    name: 'BeautyItem',
    props: [
        'icon',
        'img',
        'title',
        'subtitle',
        'chips',
        'chipsAvatar',
        'chipsTitle',
        'chipsAdd'
    ]
};
</script>
