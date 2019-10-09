<template>
    <v-btn
        color="red"
        :outlined="outlined"
        :text="text"
        :disabled="validExpression"
        @click="trueAction"
    >
        {{ label }}
        <v-icon right dark>{{ icon }}</v-icon>
    </v-btn>
</template>

<script>
import router from '@/router';

export default {
    name: 'BeautyButton',
    props: [
        'validExpression',
        'action',
        'to',
        'icon',
        'label',
        'outlined',
        'text'
    ],
    methods: {
        trueAction: function() {
            if (this.$props.to !== undefined) {
                router.push(this.$props.to);
            } else {
                this.$emit('action');
            }
        }
    }
};
</script>
