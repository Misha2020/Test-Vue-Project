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
    import infiniteScroll from 'vue-infinite-scroll'

    import { Movie } from "../../types/Movie";
    import MovieItem from "../movie-item/movie-item"
    import { moviesService } from '../../services/movies.service'

    @Component({
        components: { MovieItem },
        directives: { infiniteScroll }
    })
    export default class Upcoming extends Vue {
        @Getter movies: Movie[];
        @Mutation loadMovies;
        @Mutation loadNextMovies;

        public page = 1;

        public created() {
            this.loadMore();
        }

        public loadMore() {
            moviesService.loadUpcoming(this.page)
                .then((response: any) => {
                    response.data.page === 1 ?
                        this.loadMovies(response.data.results) :
                        this.loadNextMovies(response.data.results);
                    this.page = +response.data.page + 1;
                })
        }
    }
</script>
