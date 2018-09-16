<template>
    <div>
        <nav-menu></nav-menu>
        <div class="movie-wrapper" v-if="movie.title">
            <div class="poster">
                <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path">
            </div>
            <div class="info">
                <div class="title"> {{movie.title}} ({{releaseYear}})</div>
                <div class="overview"> {{movie.overview}}</div>
                <div class="info-line">
                    <strong>Genre:</strong>
                    <span v-for="(genre, index) in movie.genres">
                    {{genre.name}}<span v-if="index !== movie.genres.length -1">,</span>
                </span>
                </div>
                <div class="info-line"><strong>Release date:</strong> {{movie.release_date}}</div>
                <div class="info-line" v-if="movie.budget"><strong>Budget:</strong> {{movie.budget}}</div>
                <div class="info-line" v-if="movie.runtime"><strong>Runtime:</strong> {{movie.runtime}}</div>
                <div class="info-line"><strong>Vote count:</strong> {{movie.vote_count}}</div>
                <star-rating
                        @rating-selected="onRateSelected($event)"
                        class="info-line"
                        v-model="movie.vote_average"
                        :max-rating="10"
                        :star-size="20"
                        :increment="0.5">
                </star-rating>
                <div class="info-line">
                    <strong>Production company:</strong>
                    <span v-for="(company, index) in movie.production_companies">
                      {{company.name}}<span v-if="index !== movie.production_companies.length -1">,</span>
                </span>
                </div>
                <div class="info-line">
                    <strong>Production countries:</strong>
                    <span v-for="(country, index) in movie.production_countries">
                    {{country.name}}<span v-if="index !== movie.production_countries.length -1">,</span>
                </span>
                </div>
            </div>
        </div>
    </div>
</template>
ф
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { moviesService } from '../../services/movies.service';
import { MovieDetailsType } from '../../types/MovieDetails';
import StarRating from 'vue-star-rating';
import NavMenu from '@/components/nav-menu/nav-menu.vue';

@Component({
    components: {
        StarRating, NavMenu,
    },
})
export default class MovieDetails extends Vue {
    public movie = {} as MovieDetailsType;
    public releaseYear = '' as  any;

    public created() {
        moviesService.loadMovieById(+this.$route.params.id).then((responseMovie: any) => {
            this.movie = responseMovie.data;
            this.releaseYear = new Date(this.movie.release_date).getFullYear();
        });
    }

    public onRateSelected(value: any) {
        moviesService.rateMovie(this.movie.id, { value });
    }
}
</script>

<style lang="less">
    @media screen and (max-width: 479px) {
        .movie-wrapper {
            display: block !important;
            padding: 20px 0 !important;
        }

        .info {
            margin: 0 20px !important;
        }
    }

    .movie-wrapper {
        margin: 0 auto;
        max-width: 1140px;
        display: flex;
        height: 95%;
        overflow-y: auto;
        padding: 25px 35px;
        background-color: white;
        .info {
            margin-left: 50px;
            .overview {
                font-size: 15px;
                text-align: left;
                margin-bottom: 10px;
            }
            .title {
                text-align: left;
                font-weight: bold;
                color: black;
                margin-bottom: 10px;
            }
            .info-line {
                text-align: left;
                margin-bottom: 10px;
            }
            .company-item {
                display: flex;
                margin-top: 10px;
                .company-name {
                    margin-left: 40px;
                    font-size: 20px;
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
</style>