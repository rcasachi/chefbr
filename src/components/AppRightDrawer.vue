<template>
    <v-navigation-drawer
        class="the-right-drawer"
        :floating="true"
        :permanent="true"
        app
        right
        dark
    ></v-navigation-drawer>
</template>

<script>
export default {
    name: 'AppRightDrawer'
};
</script>

<style scoped>
.the-right-drawer {
    background-color: #db1d40;
}
</style>
