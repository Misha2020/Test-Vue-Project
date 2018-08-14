<template>
    <div class="home">
        <!--<img src="../assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
        <router-link to="popular">Popular</router-link>
        <router-link to="recommendations">Recommendations</router-link>
        <button @click="logout()">Logout</button>
        <!--<router-link to="/about">Recomendations</router-link>-->
        <router-view/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import router from '../../router';

    @Component()
    export default class Home extends Vue {
        public logout() {
            localStorage.clear();
            router.push({path: '/login'})
        }
    }
</script>
