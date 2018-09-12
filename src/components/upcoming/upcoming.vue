<template>
    <movie-list movieListType="upcoming"></movie-list>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MovieList from '@/components/movie-list/movie-list.vue';

@Component({
    components: { MovieList },
})
export default class Upcoming extends Vue {}
</script>
