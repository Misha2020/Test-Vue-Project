<template>
    <div class="movie">
        <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path">
        <div class="info">
            <div class="title" @click="goToMovie(movie.id)"> {{movie.title}}</div>
            <div class="description"> {{movie.overview}}</div>
            <div class="release-date">Release date: {{movie.release_date}}</div>
            <star-rating v-model="movie.vote_average" :max-rating="10" :star-size="20" :increment="0.5"></star-rating>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import StarRating from 'vue-star-rating'
    import { Movie } from "../../types/Movie";
    import router from '../../router';

    @Component({
        components: {
            StarRating
        }
    })
    export default class MovieItem extends Vue {
        @Prop() movie: Movie;

        public goToMovie(id) {
            router.push({name: 'movieDetails', params: { id }})
        }
    }
</script>

<style lang="less">
    .movie {
        width: 50%;
        display: flex;
        padding: 5px 30px;
        max-height: 300px;
        img {
            min-height: 278px;
            min-width: 175px;
            height: 278px;
            width: 175px;
        }
        .info {
            margin-left: 10px;
            .title {
                text-align: left;
                cursor: pointer;
            }
            .title:hover {
                color: red;
            }
            .description {
                font-size: 13px;
                text-align: left;
                max-height: 100px;
                overflow: hidden;
            }
            .release-date {
                text-align: left;
            }
        }
    }
</style>