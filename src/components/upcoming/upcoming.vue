<template>
    <movie-list movieListType="upcoming"></movie-list>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import MovieList from "../movie-list/movie-list"
    @Component({
        components: { MovieList }
    })
    export default class Upcoming extends Vue {}
</script>
