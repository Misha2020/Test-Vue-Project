<template>
    <movie-list movieListType="popular"></movie-list>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import MovieList from "../movie-list/movie-list"

    @Component({
        components: { MovieList }
    })
    export default class Popular extends Vue { }
</script>