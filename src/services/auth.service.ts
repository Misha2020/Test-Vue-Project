import { HTTP } from '@/http/http-common';

class AuthService {
    public getToken(apiKey: string) {
        HTTP.get(`/3/authentication/token/new?api_key=${apiKey}`)
            .then((response: any) => {
                this.getPermission(response.data.request_token, apiKey);
            });
    }

    public checkIsAuth(to: any, from: any, next: any) {
        if (!localStorage.getItem('api_key') && !localStorage.getItem('request_token')) {
            next({
                path: '/login',
            });
        } else {
            this.checkIsSession(next);
        }
    }

    private getPermission(token: string, apiKey: string) {
        localStorage.setItem('api_key', apiKey);
        localStorage.setItem('request_token', token);
        window.location.href =
            `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:8080/#/home`;
    }

    private checkIsSession(next: any) {
        if (!sessionStorage.getItem('session_id')) {
            const apiKey = localStorage.getItem('api_key');
            const requestToken: any = localStorage.getItem('request_token');

            HTTP.post(`/3/authentication/session/new?api_key=${apiKey}`, {request_token: requestToken})
                .then((response: any) => {
                    sessionStorage.setItem('session_id', response.data.session_id);
                }).catch(() => {
                    localStorage.clear();
                    next({
                        path: '/login',
                    });
                });
        }
        next();
    }
}

export const authService = new AuthService();
