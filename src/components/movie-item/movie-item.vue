<template>
    <div class="movie">
        <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path">
        <div class="title"> {{movie.title}}</div>
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { Movie } from "../../types/Movie";

    @Component()
    export default class MovieItem extends Vue {
        @Prop() movie: Movie;
    }
</script>

<style lang="less">
    .movie {
        width: 50%;
    }
</style>