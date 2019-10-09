<template>
    <v-textarea
        :name="name"
        :label="label"
        :id="name"
        :rules="rules"
        v-bind:value="valueNew"
        @input="valueComputed($event)"
        outlined
        required
    >
    </v-textarea>
</template>

<script>
export default {
    name: 'BeautyTextarea',
    props: ['name', 'label', 'model', 'rules'],
    data() {
        return {
            valueNew: this.$props.value
        };
    },
    methods: {
        valueComputed: function($event) {
            this.valueNew = $event;
            this.$emit('input', $event);
        }
    }
};
</script>
