<template>
    <div class="movie" v-if="movie">
        <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path">
        <div class="title"> {{movie.title}}</div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { Movie } from "../../types/Movie";
    // import {Getter} from 'vuex-class';

    @Component()
    export default class MovieDetails extends Vue {
        movie: Movie;

        created() {
            this.movie = this.$store.getters.movieById(this.$route.params.id)
        }
    }
</script>