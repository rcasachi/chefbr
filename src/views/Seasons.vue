<template>
    <beauty-list
        title="Temporadas (em construção)"
        :list="seasons"
        height-avatar="75"
        width-avatar="75"
    ></beauty-list>
</template>

<script>
import BeautyList from '@/components/BeautyList';

export default {
    components: {
        BeautyList
    },
    computed: {
        seasons: vm => vm.$store.state.seasons.seasons
    }
};
</script>
