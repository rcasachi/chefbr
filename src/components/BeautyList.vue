<template>
    <v-card class="mx-3 my-2" flat>
        <v-card-title>{{ title }}</v-card-title>
        <v-list>
            <v-list-group
                v-for="item in list"
                :key="item.key"
                no-action
                dark
                active-class="red--text"
            >
                <template v-slot:activator>
                    <v-list-item-avatar
                        :height="heightAvatar"
                        :width="widthAvatar"
                    >
                        <v-img :src="item.photo"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title
                            v-text="item.name"
                        ></v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-list-item>
                    <v-list-item-content>
                        <blockquote class="blockquote pr-7">
                            {{ item.description }}
                        </blockquote>
                        <p class="text-right overline">
                            Fonte: {{ item.source }}
                        </p>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-card>
</template>

<script>
export default {
    name: 'BeautyList',
    props: ['list', 'title', 'heightAvatar', 'widthAvatar']
};
</script>

<style scoped>
.blockquote {
    line-height: 26px;
}
</style>
