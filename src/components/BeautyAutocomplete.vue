<template>
    <v-autocomplete
        :name="name"
        :label="label"
        :id="name"
        :items="items"
        v-bind:value="valueNew"
        @input="valueComputed($event)"
        item-color="red"
        required
        :dense="solo"
        :solo="solo"
    ></v-autocomplete>
</template>

<script>
export default {
    name: 'BeautyAutocomplete',
    props: [
        'items',
        'name',
        'label',
        'value',
        'solo'
    ],
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
