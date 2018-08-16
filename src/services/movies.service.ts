import { HTTP } from '@/http/http-common';

class MoviesService {
    private apiKey: any;

    constructor() {
        this.apiKey = localStorage.getItem('api_key');
    }

    public loadPopular(page: number) {
        return HTTP.get(`/3/movie/popular?api_key=${this.apiKey}&page=${page} `);
    }

    public loadUpcoming(page: number) {
        return HTTP.get(`/3/movie/upcoming?api_key=${this.apiKey}&page=${page} `);
    }

    // loadMovieById(movieId: number) { }
}

export const moviesService = new MoviesService();