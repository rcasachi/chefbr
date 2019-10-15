<template>
    <v-switch
        :name="name"
        :label="label"
        :id="name"
        color="red"
        required
        :dense="solo"
        :solo="solo"
        v-bind:value="valueNew"
        @input="valueComputed($event)"
    ></v-switch>
</template>

<script>
export default {
    name: 'BeautySwitch',
    props: ['name', 'label', 'value', 'solo'],
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
