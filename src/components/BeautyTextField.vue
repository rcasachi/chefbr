<template>
    <v-text-field
        :name="name"
        :id="name"
        :label="label"
        type="text"
        :rules="rules"
        v-bind:value="valueNew"
        @input="valueComputed($event)"
        required
        :dense="solo"
        :solo="solo"
    >
    </v-text-field>
</template>

<script>
export default {
    name: 'BeautyTextField',
    props: ['name', 'label', 'value', 'rules', 'solo'],
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
