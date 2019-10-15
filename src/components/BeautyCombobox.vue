<template>
    <v-combobox
        :items="items"
        :label="label"
        :item-text="itemText"
        :item-value="itemValue"
        v-bind:value="valueNew"
        @input="valueComputed($event)"
        chips
        eager
        :multiple="multiple"
        :dense="solo"
        :solo="solo"
    >
        <template v-slot:selection="data">
            <v-chip>
                <v-avatar left>
                    <img :src="data.item[itemImg]" :alt="data.item[itemText]" />
                </v-avatar>
                {{ data.item[itemText] }}
            </v-chip>
        </template>
    </v-combobox>
</template>

<script>
export default {
    name: 'BeautyCombobox',
    props: [
        'items',
        'label',
        'itemText',
        'itemValue',
        'itemImg',
        'value',
        'multiple',
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
