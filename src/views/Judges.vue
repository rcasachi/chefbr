<template>
    <beauty-list
        title="Jurados"
        :list="judges"
        height-avatar="75"
        width-avatar="50"
    ></beauty-list>
</template>

<script>
import BeautyList from '@/components/BeautyList';

export default {
    components: {
        BeautyList
    },
    computed: {
        judges: vm => vm.$store.state.judges.judges
    }
};
</script>
