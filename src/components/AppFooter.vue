<template>
    <v-footer :inset="true" class="the-footer" app>
        <span class="crights-footer">
            Feito com
            <img
                src="images/heart-icon.png"
                alt="amor"
                title="amor"
                class="crights-icon"
            />
            e
            <img
                src="images/vue-icon.png"
                alt="vuejs"
                title="vuejs"
                class="crights-icon"
            />
            por
            <img
                src="images/rafael-icon.png"
                alt="RafaelCasachi.Dev"
                title="RafaelCasachi.Dev"
                class="crights-icon"
            />
            <a href="https://rafaelcasachi.dev" title="RafaelCasachi.Dev">
                Rafael Casachi
            </a>
            . &copy; {{ new Date().getFullYear() }}
        </span>
    </v-footer>
</template>

<script>
export default {
    name: 'AppFooter'
};
</script>

<style scoped>
.the-footer {
    background-color: #232323;
}
.crights-footer {
    font-size: 14px;
}
.crights-icon {
    display: inline-block;
    width: 12px;
    vertical-align: middle;
    margin-left: 2px;
    margin-right: 2px;
}
</style>
