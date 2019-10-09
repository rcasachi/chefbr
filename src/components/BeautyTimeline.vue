<template>
    <div class="pb-2">
        <h1 class="display-1 the-title pa-6">{{ title }}</h1>
        <v-timeline dense dark>
            <v-timeline-item
                color="pink"
                small
                v-for="line in lines"
                :key="line.key"
            >
                <v-row class="mr-0" align-self="middle">
                    <v-col cols="3">
                        <strong>{{ line.date }}</strong>
                    </v-col>
                    <v-col>
                        <strong>Episódio {{ line.order }}</strong>
                        <div class="caption">Editar</div>
                    </v-col>
                </v-row>
            </v-timeline-item>
        </v-timeline>
        <v-btn class="ml-6" :to="addLink">{{ addTitle }}</v-btn>
    </div>
</template>

<script>
export default {
    name: 'BeautyTimeline',
    props: ['title', 'lines', 'addLink', 'addTitle']
};
</script>

<style scoped>
.the-title {
    font-family: 'Open Sans Condensed', sans-serif !important;
    font-size: 16px;
}
</style>
