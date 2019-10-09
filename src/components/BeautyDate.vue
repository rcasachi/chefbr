<template>
    <v-menu
        v-model="menu"
        transition="scale-transition"
        min-width="290px"
        offset-y
    >
        <template v-slot:activator="{ on }">
            <v-text-field
                prepend-icon="far fa-calendar-alt"
                v-model="formatted"
                :label="label"
                v-on="on"
                @blur="blurText"
                readonly
            ></v-text-field>
        </template>

        <v-date-picker
            v-bind:value="valueNew"
            @input="valueComputed($event)"
            locale="pt-br"
        ></v-date-picker>
    </v-menu>
</template>

<script>
import helpers from '@/helpers';

export default {
    name: 'BeautyDate',
    props: ['value', 'label'],
    data() {
        return {
            valueNew: this.$props.value,
            formatted: this.$props.value,
            menu: false
        };
    },
    methods: {
        valueComputed: function($event) {
            this.menu = false;
            this.valueNew = $event;
            this.formatted = helpers.formatDate(this.valueNew);
            this.$emit('input', $event);
        },
        blurText: function() {
            this.valueNew = helpers.parseDate(this.formatted);
        }
    },
    watch: {
        menu: function(val) {
            this.formatted = helpers.formatDate(this.valueNew);
        }
    }
};
</script>
