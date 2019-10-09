<template>
    <beauty-list
        title="Apresentadores"
        :list="presenters"
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
        presenters: vm => vm.$store.state.presenters.presenters
    }
};
</script>
