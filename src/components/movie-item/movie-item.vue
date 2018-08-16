<template>
    <div class="movie">
        <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path">
        <div class="info">
            <router-link  :to="{ name: 'movieDetails', params: { id: movie.id }}">
                <div class="title"> {{movie.title}} ({{releaseYear}})</div>
            </router-link>
            <div class="description"> {{movie.overview}}</div>
            <!--<div class="release-date">Release date: {{movie.release_date}}</div>-->
            <star-rating v-model="movie.vote_average" :max-rating="10" :star-size="20" :increment="0.5"></star-rating>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import StarRating from 'vue-star-rating'
    import { Movie } from "../../types/Movie";

    @Component({
        components: {
            StarRating
        }
    })
    export default class MovieItem extends Vue {
        @Prop() movie: Movie;
        releaseYear: string;

        public created() {
            this.releaseYear = new Date(this.movie.release_date).getFullYear();
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
            a {
                text-decoration: none;
            }
            .title {
                text-align: left;
                cursor: pointer;
                font-weight: bold;
                color: black;
            }
            .title:hover {
                color: red;
            }
            .description {
                font-size: 13px;
                text-align: left;
                max-height: 212px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 11;
                -webkit-box-orient: vertical;
            }
            .release-date {
                text-align: left;
            }
        }
    }
</style>