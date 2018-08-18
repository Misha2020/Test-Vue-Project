import { HTTP } from '@/http/http-common';

class MoviesService {
    private apiKey: any;
    private sessionId: any;

    constructor() {
        this.apiKey = localStorage.getItem('api_key');
        this.sessionId = sessionStorage.getItem('session_id');
    }

    public loadPopular(page: number) {
        return HTTP.get(`/3/movie/popular?api_key=${this.apiKey}&page=${page} `);
    }

    public loadUpcoming(page: number) {
        return HTTP.get(`/3/movie/upcoming?api_key=${this.apiKey}&page=${page} `);
    }

    public loadMovieById(movieId: number) {
        return HTTP.get(`/3/movie/${movieId}?api_key=${this.apiKey}`);
    }

    public rateMovie(movieId: number, body: { value: string }) {
        return HTTP.post(`/3/movie/${movieId}/rating?api_key=${this.apiKey}&session_id=${this.sessionId}`, body);
    }
}

export const moviesService = new MoviesService();
