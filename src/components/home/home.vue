<template>
    <div class="home">
        <nav-menu></nav-menu>
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import NavMenu from "../nav-menu/nav-menu"

    @Component({
        components: {
            NavMenu
        }
    })
    export default class Home extends Vue {}
</script>

<style lang="less">
    .home {
        height: 100%;
    }
</style>