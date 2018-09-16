<template>
    <nav class="navbar navbar-dark bg-primary">
        <div class="nav">
            <span class="nav-item">
                <router-link class="nav-link" to="/home/popular">Popular</router-link>
            </span>
            <span class="nav-item">
                <router-link class="nav-link" to="/home/upcoming">Upcoming</router-link>
            </span>
        </div>
        <button class="btn btn-secondary btn-sm" @click="logout">Logout</button>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class NavMenu extends Vue {
    public logout() {
        localStorage.clear();
        sessionStorage.clear();
        this.$router.push({path: '/login'});
    }
}
</script>

<style lang="less">
    .navbar {
        position: initial !important;
    }
    .nav-item a {
        color: black;
    }
    .nav-item a:hover,
    .router-link-active {
        color: white !important;
    }
</style>