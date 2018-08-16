<template>
    <div class="popular-wrapper"
         v-infinite-scroll="loadMore"
         infinite-scroll-disabled="busy"
         infinite-scroll-distance="20">
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
    import infiniteScroll from 'vue-infinite-scroll'

    @Component({
        components: { MovieItem },
        directives: { infiniteScroll }
    })
    export default class Popular extends Vue {
        @Getter movies: Movie[];
        @Mutation loadMovies;
        @Mutation loadNextMovies;

        public page = 1;
        public apiKey: string;

        public created() {
            this.apiKey = localStorage.getItem('api_key');
        }

        public loadMore() {
            this.getMovies(this.page)
                .then((response: any) => {
                    response.data.page === 1 ?
                        this.loadMovies(response.data.results) :
                        this.loadNextMovies(response.data.results);
                    this.page = +response.data.page + 1;
                })
        }

        public getMovies(page) {
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
