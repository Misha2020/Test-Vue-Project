<template>
    <div class="popular-wrapper"
         v-infinite-scroll="loadMore"
         infinite-scroll-disabled="busy"
         infinite-scroll-distance="20">
        <nav-menu></nav-menu>
        <div class="movies">
            <movie-item v-for="movie in movies" :movie="movie"></movie-item>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Getter, Mutation } from "vuex-class";

    import { HTTP } from '../../http/http-common';
    import { Movie } from "../../types/Movie";
    import MovieItem from "../movie-item/movie-item"
    import NavMenu from "../nav-menu/nav-menu"
    import infiniteScroll from 'vue-infinite-scroll'

    @Component({
        components: { MovieItem, NavMenu },
        directives: { infiniteScroll }
    })
    export default class Popular extends Vue {
        @Getter movies: Movie[];
        @Mutation loadMovies;
        @Mutation loadNextMovies;

        page = 1;
        apiKey: string;

        created() {
            this.apiKey = localStorage.getItem('api_key');
        }

        loadMore() {
            this.getMovies(this.page)
                .then((response: any) => {
                    response.data.page === 1 ?
                        this.loadMovies(response.data.results) :
                        this.loadNextMovies(response.data.results);
                    this.page = +response.data.page + 1;
                })
        }

        getMovies(page) {
            return HTTP.get(`/3/movie/popular?api_key=${this.apiKey}&page=${page} `);
        }
    }
</script>

<style lang="less">
    .popular-wrapper {
        overflow-y: auto;
        height: 100vh;
        .movies {
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>
