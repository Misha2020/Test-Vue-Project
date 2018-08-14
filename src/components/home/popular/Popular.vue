<template>
    <div class="home">
        <!--<img src="../assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
        <h4>Popular work</h4>
        <div v-for="movie in movies">{{ movie.name }}</div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { HTTP } from '../../../http/http-common';
    import { Getter } from "vuex-class";
    import { Movie } from "../../../types/Movie";

    @Component()
    export default class Popular extends Vue {
        @Getter movies: Movie[];
        apiKey: string;

        created() {
            this.apiKey = localStorage.getItem('api_key');
            HTTP.get(`/3/movie/popular?api_key=${this.apiKey} `)
                .then((response: any) => {
                    console.log(response);
                })
        }
    }
</script>
