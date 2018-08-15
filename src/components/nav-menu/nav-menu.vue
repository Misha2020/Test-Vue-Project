<template>
    <div class="nav-menu" >
        <router-link to="popular">Popular</router-link>
        <router-link to="recommendations">Recommendations</router-link>
        <button @click="logout()">Logout</button>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import router from '../../router';

    @Component()
    export default class NavMenu extends Vue {
        public logout() {
            localStorage.clear();
            router.push({path: '/login'})
        }
    }
</script>