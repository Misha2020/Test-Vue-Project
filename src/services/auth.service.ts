import axios from 'axios';

import { HTTP } from '@/http/http-common';
import { API_BASE_URL } from '@/constants';

class AuthService {
    public getToken(apiKey: string) {
        HTTP.get(`/3/authentication/token/new?api_key=${apiKey}`)
            .then((response: any) => {
                this.getPermission(response.data.request_token, apiKey);
            });
    }

    private getPermission(token: string, apiKey: string) {
        localStorage.setItem('api_key', apiKey);
        localStorage.setItem('request_token', token);
        window.location.href =
            `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:8080/#/home/popular`;
    }

    public checkIsAuth(to: any, from: any, next: any) {
        if (!localStorage.getItem('api_key')) {
            next({
                path: '/login',
            });
        } else {
            this.checkIsSession(next);
        }
    }

    private checkIsSession(next: any) {
        if (!sessionStorage.getItem('session_id')) {
            const apiKey = localStorage.getItem('api_key');
            const requestToken: any = localStorage.getItem('request_token');

            const params = new URLSearchParams();
            params.append('request_token', requestToken);

            axios.post(
                `${API_BASE_URL}/3/authentication/session/new?api_key=${apiKey}`, params)
                .then((response: any) => {
                    sessionStorage.setItem('session_id', response.data.session_id);
                });
        }
        next();
    }
}

export const authService = new AuthService();
