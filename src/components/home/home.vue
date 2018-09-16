<template>
    <div class="home">
        <router-view></router-view>
    </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {}
</script>

<style lang="less">
    .home {
        height: 100%;
    }
</style>