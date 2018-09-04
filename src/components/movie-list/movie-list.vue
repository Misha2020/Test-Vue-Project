<template>
    <div class="movie-list-wrapper"
         v-infinite-scroll="loadMore"
         infinite-scroll-disabled="busy"
         infinite-scroll-distance="20">
        <div class="movies">
            <movie-item v-for="movie in movies" :movie="movie"></movie-item>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { Getter, Mutation } from "vuex-class";
    import infiniteScroll from 'vue-infinite-scroll'

    import MovieItem from "../movie-item/movie-item"
    import { moviesService } from '../../services/movies.service'
    import { Movie } from '../../types/Movie';

    @Component({
        components: { MovieItem },
        directives: { infiniteScroll }
    })
    export default class MovieList extends Vue {
        @Prop() movieListType: string;

        @Getter movies: Movie[];

        @Mutation loadMovies: any;
        @Mutation loadNextMovies: any;

        public page = 1;

        public created() {
            this.loadMore();

        }

        public loadMore() {
            this.movieListType === 'popular' ?
                moviesService.loadPopular(this.page).then(response => this.onMoviesLoaded(response)) :
                moviesService.loadUpcoming(this.page).then(response => this.onMoviesLoaded(response));
        }

        public onMoviesLoaded(response: any) {
            response.data.page === 1 ?
                this.loadMovies(response.data.results) :
                this.loadNextMovies(response.data.results);
            this.page = +response.data.page + 1;
        }
    }
</script>
<style lang="less">
    .movie-list-wrapper {
        overflow-y: auto;
        height: 100vh;
        padding-top: 20px;
    }
    .movies {
        display: flex;
        flex-wrap: wrap;
    }
</style>
